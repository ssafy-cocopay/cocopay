package com.cocopay.payment.service;

import com.cocopay.payment.apicall.ApiCallService;
import com.cocopay.payment.apicall.dto.req.PaymentReqDto;
import com.cocopay.payment.apicall.dto.req.UserCardBenefitBodyDto;
import com.cocopay.payment.apicall.dto.res.BenefitResDto;
import com.cocopay.payment.dto.req.FinalPayReqDto;
import com.cocopay.payment.dto.req.PayPostDto;
import com.cocopay.payment.dto.res.CardOfferResDto;
import com.cocopay.payment.dto.res.PerformanceResListDto;
import com.cocopay.payment.mapper.PaymentMapper;
import com.cocopay.redis.key.BenefitKey;
import com.cocopay.redis.key.OrderKey;
import com.cocopay.redis.service.BenefitKeyService;
import com.cocopay.redis.service.OrderKeyService;
import com.cocopay.redis.service.PerformanceKeyService;
import com.cocopay.user.entity.User;
import com.cocopay.user.service.UserService;
import com.cocopay.usercard.entity.UserCard;
import com.cocopay.usercard.repository.UserCardRepository;
import com.cocopay.usercard.service.UserCardService;
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
    private final ApiCallService apiCallService;
    private final PerformanceKeyService performanceKeyService;
    private final OrderKeyService orderKeyService;
    private final BenefitKeyService benefitKeyService;
    private final PaymentMapper paymentMapper;
    private final UserService userService;
    private final UserCardService userCardService;

    //오프라인의 경우 오토체인징 사용 분기점
    public void autoOrDirect(PayPostDto payPostDto) {
        UserCard findUserCard = userCardService.findUserCardById(payPostDto.getCardId());
        log.info("오프라인 결제 분기 진입");
        //코코카드라면?
        if (findUserCard.isCocoType()) {
            log.info("코코카드로 요청 들어옴");
            CardOfferResDto offerResDto = autoChanging(payPostDto.getUserId(),
                    payPostDto.getCategory(),
                    payPostDto.getStoreName(),
                    payPostDto.getOrderPrice()).get(0);

            payPostDto.setOrderPrice(offerResDto.getFinalPrice());

            reqPay(null, payPostDto, offerResDto.getCardUuid());
        }
        //코코카드가 아니라면 바로 결제 진행
        else {
            log.info("일반카드로 결제 요청 들어옴");
            reqPay(null, payPostDto, findUserCard.getCardUuid());
        }
    }

    //오토체인징 시스템 진행
    //온 오프, 둘 다 카테고리와 매장명은 들어옴
    public List<CardOfferResDto> autoChanging(int userId, String category, String storeName, int orderPrice) {
        User findUser = userService.findUserById(userId);

        //사용자 카드 목록 조회
        List<UserCard> findUserCardList = userCardRepository.findUserCardListByCocoType(userId);
        log.info("코코카드 제외한 유저 카드 갯수 : {}", findUserCardList.size());

        log.info("사용자 카드 실적 정보 조회 진행");
        PerformanceResListDto performanceResList = apiCallService.userCardPerformanceApiCall(findUserCardList);
        log.info("사용자 카드 실적 정보 조회 끝");

        //사용자 카드 실적 정보 redis 저장
        performanceKeyService.performanceKeySave(performanceResList.getPerformanceList());

        //사용자 카드 우선순위와 실적 정보 매핑 진행
        List<CardOfferResDto> cardOfferResList = performanceKeyService.performanceKeyMapping(findUserCardList, orderPrice);

        //실적 우선, 할인 우선 분기
        if (findUser.isRecommendType()) {
            log.info("할인 우선으로 계산 진행");
            //redis에 있는 주문 정보 가져옴 (카테고리, 매장명)
            OrderKey orderKey = orderKeyService.findOrderKey(findUser.getId());

            //실적 달성했는 지 확인
            List<CardOfferResDto> newCardOfferResDtoList = isPerformance(cardOfferResList);

            //api call을 위해 카테고리와 함께 매핑 진행
            UserCardBenefitBodyDto benefitBodyDto = paymentMapper.toBenefitBodyDto(newCardOfferResDtoList, orderKey.getCategory(), orderKey.getStoreName());
            log.info("사용자 카드들의 혜택 조회 api call 진행");
            List<BenefitResDto> benefitResDtoList = apiCallService.userCardBenefitApiCall(benefitBodyDto);
            log.info("사용자 카드들의 혜택 조회 api call 끝");
            log.info("혜택 조회 정보 redis 저장");
            benefitKeyService.benefitSave(benefitResDtoList);
            return benefitFirst(cardOfferResList, orderKey.getOrderPrice());

        } else {
            log.info("실적 우선으로 계산 진행");
            return performanceFirst(cardOfferResList);
        }
    }

    //할인 우선
    //전월실적 달성 여부 필터링 stream filter 사용
    public List<CardOfferResDto> benefitFirst(List<CardOfferResDto> cardOfferResList, int orderPrice) {
        // 1. 순회하면서 benefitKey를 조회
        // 2. benefitKey에 있다면 혜택 정보가 있는 것이므로 할인 계산 진행
        // 3. benefitKEy에 없다면 혜택 정보가 없으므로 계산을 진행하지 않음
        // 4. 계산 된 정보 정렬 후 매핑 진행
        for (CardOfferResDto co : cardOfferResList) {
            Optional<BenefitKey> benefitKey = benefitKeyService.findBenefitKey(co.getCardUuid());

            if (benefitKey.isPresent()) {
                BenefitKey findBenefitKey = benefitKey.get();
                //할인 예정 금엑
                int discounted = (int) (orderPrice * (findBenefitKey.getDiscount() * 0.01));
                //사용자의 해당 혜택 남은 금액
                int discountAmount = findBenefitKey.getDiscountAmount();

                //남은 금액이 낭낭할 때
                if (discountAmount > discounted) {
                    co.setFinalPrice(orderPrice - discounted);
                    co.setDiscounted(discounted);
                }
                //남은 금액이 쪼달릴 때
                else {
                    co.setFinalPrice(orderPrice - discountAmount);
                    co.setDiscounted(discountAmount);
                }
            } else {
                co.setFinalPrice(orderPrice);
                co.setDiscounted(0);
            }
        }
        return benefitSort(cardOfferResList);
    }

    //실적 우선
    public List<CardOfferResDto> performanceFirst(List<CardOfferResDto> cardOfferResList) {
        return performanceSort(cardOfferResList);
    }

    //할인 정렬 진행
    //정렬 조건
    // 1. 최종 금액 내림차순
    // 2. 같다면 카드 우선 순위 오름차순
    public List<CardOfferResDto> benefitSort(List<CardOfferResDto> cardOfferResList) {
        return cardOfferResList.stream()
                .sorted(Comparator.comparing(CardOfferResDto::getFinalPrice)
                        .thenComparing(CardOfferResDto::getCardOrder))
                .toList();
    }

    //실적 정렬 진행
    //정렬 조건
    // 1. 실적 단계가 가장 낮은 거
    // 2. 같을 경우 사용자 우선 순위 낮은 거
    public List<CardOfferResDto> performanceSort(List<CardOfferResDto> cardOfferResList) {
        // 반환 정보들 하나로 합 친 방식
        return cardOfferResList.stream()
                .sorted(Comparator.comparing(CardOfferResDto::getLevel)
                        .thenComparing(CardOfferResDto::getCardOrder))
                .toList();
        //반환 정보들 분할
//        return cardOfferResList.stream()
//                .sorted(Comparator
//                        .comparing((CardOfferResponseDto2 dto) -> dto.getPerformance().getLevel()) // 1번 조건
//                        .thenComparing((CardOfferResponseDto2 dto) -> dto.getCard().getCardOrder())) // 2번 조건
//                .toList();
    }

    //실적 달성 확인
    public List<CardOfferResDto> isPerformance(List<CardOfferResDto> cardOfferResDtoList) {
        return cardOfferResDtoList.stream()
                .filter(CardOfferResDto::isPastPerformance)
                .toList();
    }

    //결제 요청 메서드
    public void reqPay(FinalPayReqDto finalPayReqDto, PayPostDto payPostDto,int cardUuid) {
        PaymentReqDto paymentReqDto;

        if (payPostDto == null) {
            OrderKey findOrderKey = orderKeyService.findOrderKey(finalPayReqDto.getUserId());

            paymentReqDto = paymentMapper.toPaymentReqDto(findOrderKey, finalPayReqDto, cardUuid);

        } else {
            paymentReqDto = paymentMapper.toPaymentReqDto2(payPostDto, cardUuid);
        }

        apiCallService.payApiCall(paymentReqDto);
    }
}
