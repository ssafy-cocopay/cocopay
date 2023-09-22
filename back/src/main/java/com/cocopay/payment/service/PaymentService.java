package com.cocopay.payment.service;

import com.cocopay.payment.apicall.ApiCallService;
import com.cocopay.payment.apicall.dto.req.PaymentRequestDto;
import com.cocopay.payment.apicall.dto.req.UserCardBenefitBodyDto;
import com.cocopay.payment.apicall.dto.req.UserCardBenefitInfoResponseListDto;
import com.cocopay.payment.dto.req.OnlinePayPostDto;
import com.cocopay.payment.dto.req.PickDto;
import com.cocopay.payment.dto.res.CardOfferResponseDto;
import com.cocopay.payment.dto.res.OnlineResponse;
import com.cocopay.payment.dto.res.PerformanceResponseListDto;
import com.cocopay.payment.mapper.PaymentMapper;
import com.cocopay.redis.key.OrderKey;
import com.cocopay.redis.service.OrderKeyService;
import com.cocopay.redis.service.PerformanceKeyService;
import com.cocopay.user.entity.User;
import com.cocopay.user.repository.UserRepository;
import com.cocopay.usercard.entity.UserCard;
import com.cocopay.usercard.repository.UserCardRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class PaymentService {
    private final UserCardRepository userCardRepository;
    private final UserRepository userRepository;
    private final ApiCallService apiCallService;
    private final PerformanceKeyService performanceKeyService;
    private final OrderKeyService orderKeyService;
    private final PaymentMapper paymentMapper;

    //온라인 결제
    public OnlineResponse<?> onlinePay(OnlinePayPostDto postDto) {
        //사용자 카드 목록 조회
        List<UserCard> findUserCardList = userCardRepository.findUserCardListByCocoType(postDto.getUserId());

        log.info("findUserCardList : {}", findUserCardList);

        //api call
        //사용자 카드 실적 정보 조회
        log.info("사용자 카드 실적 정보 조회 진행");
        PerformanceResponseListDto performanceInfoList = apiCallService.userCardPerformanceInfo(findUserCardList);
        log.info("사용자 카드 실적 정보 조회 끝");

        performanceKeyService.performanceKeySave(performanceInfoList.getPerformanceList());

        List<CardOfferResponseDto> responseDtoList = performanceKeyService.performanceKeyMapping(findUserCardList, postDto.getOrderPrice());

        //주문 정보 저장
        orderKeyService.orderKeySave(postDto);

        User findUser = findUser(postDto.getUserId());

        //실적 우선, 할인 우선 분기
        if (findUser.isRecommendType()) {
            log.info("할인 우선으로 계산 진행");
            //redis에 있는 주문 정보 가져옴 (카테고리, 매장명)ㄴ
            OrderKey orderKey = orderKeyService.findOrderKey(findUser.getId());

            UserCardBenefitBodyDto benefitBodyDto = paymentMapper.toBenefitBodyDto(responseDtoList, orderKey.getCategory(), orderKey.getStoreName());

            log.info("사용자 카드들의 혜택 조회 api call 진행");
            UserCardBenefitInfoResponseListDto responseListDto = apiCallService.userCardBenefitApiCall(benefitBodyDto);
            log.info("사용자 카드들의 혜택 조회 api call 끝");
            return null;
        } else {
            log.info("실적 우선으로 계산 진행");
            return new OnlineResponse<>(performanceFirst(responseDtoList));
        }
    }

    //실적 우선
    public List<CardOfferResponseDto> performanceFirst(List<CardOfferResponseDto> responseDtoList) {
        //정렬 조건
        // 1. 실적 단계가 가장 낮은 거
        // 2. 같을 경우 사용자 우선 순위 낮은 거
        //버전2 정렬 조건
//        return responseDtoList.stream()
//                .sorted(Comparator
//                        .comparing((CardOfferResponseDto2 dto) -> dto.getPerformance().getLevel()) // 1번 조건
//                        .thenComparing((CardOfferResponseDto2 dto) -> dto.getCard().getCardOrder())) // 2번 조건
//                .toList();

        return responseDtoList.stream()
                .sorted(Comparator.comparing(CardOfferResponseDto::getLevel)
                        .thenComparing(CardOfferResponseDto::getCardOrder))
                .toList();
    }

    //할인 우선
    //전월실적 달성 여부 필터링 stream filter 사용
    public void benefitFirst(List<UserCard> userCardList, UserCardBenefitInfoResponseListDto responseListDto) {

    }

    //해당 유저 조회
    //UserService에 생겨야 하는 메서드임
    //해당 부분 UserService에 생기면 제거 후 di하여 사용
    public User findUser(int userId) {
        Optional<User> findUser = userRepository.findById(userId);

        return findUser
                .orElseThrow(() -> new RuntimeException("회원 조회 결과 없음"));
    }

    public void cardPick(PickDto pickDto) {
        //주문 정보(카테고리, 매장명) 조회 후 매핑 진행
        OrderKey findOrder = orderKeyService.findOrderKey(pickDto.getUserId());
        PaymentRequestDto paymentRequestDto = paymentMapper.toPaymentRequestDto(findOrder, pickDto);
        apiCallService.payApiCall(paymentRequestDto);
    }

}
