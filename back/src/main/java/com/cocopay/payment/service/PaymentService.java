package com.cocopay.payment.service;

import com.cocopay.exception.dto.CustomException;
import com.cocopay.exception.dto.ErrorCode;
import com.cocopay.payment.apicall.ApiCallService;
import com.cocopay.payment.apicall.dto.req.PaymentReqDto;
import com.cocopay.payment.apicall.dto.req.UserCardBenefitBodyDto;
import com.cocopay.payment.apicall.dto.res.BenefitResDto;
import com.cocopay.payment.dto.req.CardUuidListDto;
import com.cocopay.payment.dto.req.PayPostDto;
import com.cocopay.payment.dto.res.CardOfferResDto;
import com.cocopay.payment.dto.res.PerformanceResDto;
import com.cocopay.payment.mapper.PaymentMapper;
import com.cocopay.redis.key.BenefitKey;
import com.cocopay.redis.key.PayCompleteKey;
import com.cocopay.redis.key.PerformanceKey;
import com.cocopay.redis.mapper.RedisMapper;
import com.cocopay.redis.service.BenefitKeyService;
import com.cocopay.redis.service.PayCompleteKeyService;
import com.cocopay.redis.service.PerformanceKeyService;
import com.cocopay.user.entity.User;
import com.cocopay.user.repository.UserRepository;
import com.cocopay.usercard.entity.UserCard;
import com.cocopay.usercard.repository.UserCardRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

@Service
@Slf4j
@RequiredArgsConstructor
public class PaymentService {
    private final ApiCallService apiCallService;
    private final PerformanceKeyService performanceKeyService;
    private final BenefitKeyService benefitKeyService;
    private final UserCardRepository userCardRepository;
    private final PaymentMapper paymentMapper;
    private final UserRepository userRepository;
    private final PayCompleteKeyService payCompleteKeyService;
    private final RedisMapper redisMapper;

    //오토체인징
    //카드 리스트 업만 진행하고 바로 반환 진행
    public List<CardOfferResDto> autoChanging(PayPostDto dto) {
        log.info("오토체인징 진행");
        //사용자가 보유한 카드 리스트 조회
        List<UserCard> userCardList = userCardRepository.findUserCardListByCocoType(dto.getUserId());

        List<Integer> list = getCardUuidList(userCardList);

        //실적 조회 후 redis 저장
        getPerformanceAndSave(list);
        //혜택 조회 후 redis 저장
        getBenefitAndSave(dto, list);

        //실적 + 할인이 적용된 dto
        List<CardOfferResDto> offerResDtoList = makeCardOfferList(userCardList, dto);

        User findUser = findUserById(dto.getUserId());
        if (findUser.isRecommendType()) {
            log.info("할인 기준 카드 정렬 진행");
            return benefitOrder(offerResDtoList);
        }
        //실적 기준 카드 리스트업
        else {
            log.info("실적 기준 카드 정렬 진행");
            return performanceOrder(offerResDtoList);
        }
    }


    //최종 결제요청 진행 (결제 요청 api call 진행)
    public Integer finalPayCall(PaymentReqDto paymentReqDto) {
        return apiCallService.payApiCall(paymentReqDto);
    }

    public PaymentReqDto isCocoCard(UserCard findUserCard, PayPostDto payPostDto) {
        int cardUuid;
        //코코카드임
        if (findUserCard.isCocoType()) {
            log.info("코코카드임");
            log.info("오토체인징 시스템 시작");

            CardOfferResDto cardOfferResDto = autoChanging(payPostDto).get(0);
            log.info("코코페이가 추천한 카드 이름 : {}", cardOfferResDto.getCardName());
            cardUuid = findUserCardById(cardOfferResDto.getCardId()).getCardUuid();
            return paymentMapper.toPaymentReqDto(cardUuid, payPostDto, payPostDto.getOrderPrice());
        }
        //코코카드가 아님
        else {
            log.info("코코카드 아님");
            cardUuid = findUserCardById(payPostDto.getCardId()).getCardUuid();
            return paymentMapper.toPaymentReqDto(cardUuid, payPostDto);
        }
    }


    //추천 타입이 할인인 경우 정렬 진행
    public List<CardOfferResDto> benefitOrder(List<CardOfferResDto> list) {
        return list.stream()
                .sorted(Comparator.comparing(CardOfferResDto::getFinalPrice)
                        .thenComparing(CardOfferResDto::getCardOrder))
                .toList();
    }

    //추천 타입이 실적일 경우 정렬 진행
    public List<CardOfferResDto> performanceOrder(List<CardOfferResDto> list) {
        List<CardOfferResDto> list1 = list.stream()
                .filter(cardOfferResDto -> cardOfferResDto.getRemainingAmt() > 0)
                .sorted(Comparator.comparing(CardOfferResDto::getRemainingAmt)
                        .thenComparing(CardOfferResDto::getCurPerLevel)
                        .thenComparing(CardOfferResDto::getFinalPrice)
                        .thenComparing(CardOfferResDto::getCardOrder))
                .toList();

        List<CardOfferResDto> list2 = list.stream()
                .filter(cardOfferResDto -> cardOfferResDto.getRemainingAmt() <= 0)
                .sorted(Comparator.comparing(CardOfferResDto::getFinalPrice)
                        .thenComparing(CardOfferResDto::getCardOrder))
                .toList();

        return Stream
                .concat(list1.stream(), list2.stream())
                .toList();
    }

    //할인 금액 및 최종 결제 금액 세팅
    public List<CardOfferResDto> makeCardOfferList(List<UserCard> userCardList, PayPostDto payPostDto) {
        List<CardOfferResDto> offerResDtoList = new ArrayList<>();
        log.info("카드 정보, 실적 정보, 혜택 정보 매핑 진행");

        for (UserCard userCard : userCardList) {
            PerformanceKey performanceKey = performanceKeyService.findPerformanceKey(userCard.getCardUuid());
            Optional<BenefitKey> benefitKey = benefitKeyService.findBenefitKey(userCard.getCardUuid());
            //할인 예정 금액
            int discounted;
            //최종 결졔 금액
            int finalPrice;
            //할인율
            Integer discountRate;
            //할인 타입
            String discountType;

            //혜택 부분 계산
            if (performanceKey.isPastPerformance() && benefitKey.isPresent()) {
                BenefitKey benefit = benefitKey.get();
                //할인 예정금액
                int discount = (int) (payPostDto.getOrderPrice() * (benefit.getDiscount() * 0.01));
                int discountAmount = benefit.getDiscountAmount();
                discountType = benefit.getDiscountType();
                discountRate = benefit.getDiscount();
                //남은 금액이 낭낭할 때
                if (discountAmount > discount) {
                    finalPrice = payPostDto.getOrderPrice() - discount;
                    discounted = discount;
                }
                //남은 금액이 부족할 때
                else {
                    finalPrice = payPostDto.getOrderPrice() - discountAmount;
                    discounted = discountAmount;
                }
            } else {
                finalPrice = payPostDto.getOrderPrice();
                discounted = 0;
                discountType = null;
                discountRate = null;
            }
            //실적 정보 가져오기
            double graphRate = getGraphRate(performanceKey.getTotalPrice(), performanceKey.getPrice());
            int remainingAmt = getRemainingAmt(performanceKey);
            String cardImage = getImage(userCard);

            String format = String.format("%.1f", graphRate);
            log.info("format : {}", format);

            benefitKeyService.deleteByCardUuid(userCard.getCardUuid());

            offerResDtoList.add(paymentMapper.toCardOfferDto(userCard, cardImage, discountRate, discountType, discounted, finalPrice, remainingAmt, format, performanceKey));
        }
        return offerResDtoList;
    }

    //카드 기본, 커스텀 이미지 판단 여부
    public String getImage(UserCard userCard) {
        if (userCard.getCardCustomImage() != null) {
            return userCard.getCardCustomImage();
        } else {
            return userCard.getCardDefaultImage();
        }
    }

    //실적 그래프 만들기
    public double getGraphRate(int curAmount, int nextAmount) {
        double graphRate;
        if (curAmount >= nextAmount) {
            graphRate = 100;
        } else {
            graphRate = ((double) curAmount / nextAmount * 100);
        }

        return graphRate;
    }

    //다음 실적까지 남은 금액 만들기
    public int getRemainingAmt(PerformanceKey key) {
        int remainingAmt;
        if (key.getLevel() == key.getNextLevel() || key.getTotalPrice() >= key.getPrice()) {
            remainingAmt = 0;
        } else {
            remainingAmt = key.getPrice() - key.getTotalPrice();
        }

        return remainingAmt;
    }


    //실적 조회 api Call 진행 메서드
    public List<PerformanceResDto> performanceApiCall(List<Integer> list) {
        CardUuidListDto cardUuidList = new CardUuidListDto(list);

        return apiCallService.userCardPerformanceApiCall(cardUuidList).getPerformanceList();
    }

    //혜택 조회 api Call 진행 메서드
    public List<BenefitResDto> benefitApiCall(List<Integer> list, String category, String storeName) {
        UserCardBenefitBodyDto build = UserCardBenefitBodyDto.builder()
                .cardUuidList(list)
                .category(category)
                .storeName(storeName)
                .build();

        return apiCallService.userCardBenefitApiCall(build);
    }


    public void getBenefitAndSave(PayPostDto dto, List<Integer> list) {
        //혜택 조회
        List<BenefitResDto> benefitList = benefitApiCall(list, dto.getCategory(), dto.getStoreName());

        //혜택 조회 데이터 redis에 저장
        benefitKeyService.benefitSave(benefitList);
    }

    public void getPerformanceAndSave(List<Integer> list) {
        //실적 조회
        List<PerformanceResDto> performanceList = performanceApiCall(list);

        //실적 조회 데이터 redis에 저장
        performanceKeyService.performanceKeySave(performanceList);
    }

    //사용자 카드 목록에서 cardUuid만 추출
    public List<Integer> getCardUuidList(List<UserCard> userCardList) {
        return userCardList.stream()
                .map(UserCard::getCardUuid)
                .toList();
    }

    //결제 이후 생색내기
    public void payAfter(int userId, int cardHistoryId, int cardUuid) {
        Integer discounted = apiCallService.findDiscounted(cardHistoryId);

        //요청 보낼 list 만들기
        List<Integer> cardUuidList = new ArrayList<>();
        cardUuidList.add(cardUuid);
        //실적 찾고 저장
        getPerformanceAndSave(cardUuidList);

        PerformanceKey performanceKey = performanceKeyService.findPerformanceKey(cardUuid);
        //그래프비율 및 다음 실적까지 남은 금액
        String graphRate = String.format("%.1f", getGraphRate(performanceKey.getTotalPrice(), performanceKey.getPrice()));
        int remainingAmt = getRemainingAmt(performanceKey);

        UserCard findUserCard = findUserCardByUuid(cardUuid);
        String cardImage = findUserCard.getCardDefaultImage();

        if (findUserCard.getCardCustomImage() != null) {
            cardImage = findUserCard.getCardCustomImage();
        }

        PayCompleteKey payCompleteKey = redisMapper.toPayCompleteKey(userId, cardImage, findUserCard.getCardName(), remainingAmt, graphRate, performanceKey.getNextLevel(), discounted);
        payCompleteKeyService.completeSave(payCompleteKey);
    }

    public UserCard findUserCardById(int cardId) {
        Optional<UserCard> findUserCard = userCardRepository.findById(cardId);

        return findUserCard
                .orElseThrow(() -> new RuntimeException("해당 카드 없음"));
    }

    public UserCard findUserCardByUuid(int cardUuid) {
        Optional<UserCard> findUserCard = userCardRepository.findUserCardByUuid(cardUuid);

        return findUserCard
                .orElseThrow(() -> new CustomException(ErrorCode.DATA_NOT_FOUND));
    }

    public User findUserById(int userId) {
        Optional<User> findUser = userRepository.findById(userId);

        return findUser
                .orElseThrow(() -> new RuntimeException("회원 조회 결과 없음"));
    }

}
