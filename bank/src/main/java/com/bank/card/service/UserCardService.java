package com.bank.card.service;

import com.bank.account.service.AccountService;
import com.bank.benefit.dto.BenefitInfoResponseDto;
import com.bank.benefit.dto.BenefitResponseDto;
import com.bank.benefit.entity.Benefit;
import com.bank.benefit.entity.UserCardBenefit;
import com.bank.benefit.repository.BenefitRepository;
import com.bank.benefit.repository.UserCardBenefitRepository;
import com.bank.card.dto.*;
import com.bank.card.entity.Card;
import com.bank.card.entity.UserCard;
import com.bank.card.repository.card.CardRepository;
import com.bank.card.repository.usercard.UserCardRepository;
import com.bank.card_history.entity.CardHistory;
import com.bank.card_history.mapper.CardHistoryMapper;
import com.bank.card_history.repository.CardHistoryRepository;
import com.bank.performance.entity.Performance;
import com.bank.performance.repository.PerformanceRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserCardService {

    private final UserCardRepository userCardRepository;
    private final UserCardBenefitRepository userCardBenefitRepository;
    private final CardRepository cardRepository;
    private final BenefitRepository benefitRepository;
    private final AccountService accountService;
    private final CardHistoryRepository cardHistoryRepository;
    private final PerformanceRepository performanceRepository;
    private final CardHistoryMapper cardHistoryMapper;

    public void save(UserCard userCard) {
        userCardRepository.save(userCard);
    }

    public List<UserCard> getUserCardList(Integer uuid) {
        return userCardRepository.findUserCardByUUID(uuid);
    }

    public PerformanceResponseDto getUserCardPerformance(Integer cardUuid) {
        return userCardRepository.findUserCardPerformance(cardUuid)
                .orElseThrow(() -> new RuntimeException("일치하는 카드 아이디 없음"));
    }

    public PayResponseDto paymentWithoutBenefitId(PaymentRequestDto paymentRequestDto) {
        List<BenefitInfoResponseDto> result = benefitRepository.findBenefitByCardList(Collections.singletonList(paymentRequestDto.getCardUuid()),
                paymentRequestDto.getCategory(),
                paymentRequestDto.getStore());

        //benefit id가 조회가 안됐다면 적용되는 할인이 없으므로, 결제 프로세스 진행하면됨
        if (result.size() == 0) {
            UserCard userCard = userCardRepository.findById(paymentRequestDto.getCardUuid()).get(); // 유저카드 조회

            //계좌 출금
            CardHistory cardHistory = cardHistoryMapper.payRequestDtoToHistory(paymentRequestDto, userCard, Long.valueOf(paymentRequestDto.getRequestPrice()),
                    accountService.minus(userCard.getAccount().getNum(), paymentRequestDto.getRequestPrice()), null, null);
            cardHistoryRepository.save(cardHistory);
            userCard.setTotalPrice(userCard.getTotalPrice() + paymentRequestDto.getRequestPrice());
            userCardRepository.save(userCard);

            return new PayResponseDto(userCard.getCard().getCardName(), null);
        }
        //benefit id가 조회가 됐다면 할인 적용해서 결제 프로세스 진행하면 됨.
        else return paymentWithBenefitId(result, paymentRequestDto);
    }

    // 리팩토링 우선순위 매우 높음
    public PayResponseDto paymentWithBenefitId(List<BenefitInfoResponseDto> test, PaymentRequestDto paymentRequestDto) {
        BenefitInfoResponseDto testDto = test.get(0);
        Integer cardUuid = testDto.getCardUuid();
        //Integer benefitId = paymentRequestDto.getBenefitId();
        Benefit findBenefit = benefitRepository.findById(testDto.getBenefitId()).orElseThrow(() -> new RuntimeException("할인 NOT_FOUND"));
        Integer discount = (int) (paymentRequestDto.getRequestPrice() * ((findBenefit.getDiscount()) / 100.0)); //할인금액
        Integer discountPrice = paymentRequestDto.getRequestPrice() - discount; //할인되서 실제로 결제되는 금액

        log.info("할인율 : " + findBenefit.getDiscount());
        log.info("할인 금액 : " + discount);
        log.info("할인이 적용된 가격 : " + discountPrice);

        //할인한도까지의 남은 금액 가져오기
        UserCardBenefit findUserCardBenefit = userCardBenefitRepository.findUserCardBenefit(cardUuid, testDto.getBenefitId());
        Integer discountAmount = findUserCardBenefit.getDiscountAmount();

        log.info("할인한도까지 남은 금액 " + discountAmount);

        UserCard userCard = userCardRepository.findById(paymentRequestDto.getCardUuid()).get();
        //accountService.minus(userCard.getAccount().getNum(), paymentRequestDto.getRequestPrice());

        if (discountAmount >= discount) {
            //할인율 적용된 가격으로 결제 때리고, 결제내역 남기기, 할인현황 수정하기
            //결제내역 남기기
            CardHistory cardHistory = cardHistoryMapper.payRequestDtoToHistory(paymentRequestDto,
                    userCard,
                    Long.valueOf(discountPrice),
                    accountService.minus(userCard.getAccount().getNum(), discountPrice),
                    discount,findBenefit.getDiscountType());
            cardHistoryRepository.save(cardHistory);

            //할인현황 수정하기
            findUserCardBenefit.setDiscountAmount(discountAmount - discount);
            userCardBenefitRepository.save(findUserCardBenefit);

            //total price 수정하기
            userCard.setTotalPrice(userCard.getTotalPrice() + discountPrice);
            userCardRepository.save(userCard);

            return new PayResponseDto(userCard.getCard().getCardName(), discount);
        } else { //할인 한도가 부족할때,
            int requestPrince = paymentRequestDto.getRequestPrice() - discountAmount;
            CardHistory cardHistory = cardHistoryMapper.payRequestDtoToHistory(paymentRequestDto, userCard, (long) requestPrince, accountService.minus(userCard.getAccount().getNum(), requestPrince), discountAmount, findBenefit.getDiscountType());
            cardHistoryRepository.save(cardHistory);
            findUserCardBenefit.setDiscountAmount(0);
            userCardBenefitRepository.save(findUserCardBenefit);
            userCard.setTotalPrice(userCard.getTotalPrice() + discountPrice);
            userCardRepository.save(userCard);

            return new PayResponseDto(userCard.getCard().getCardName(), discountAmount);
        }
    }

    //카드 고유번호로 카드 조회
    public UserCardDto getUserCard(String serialNumber, String cvc, String password) {
        UserCardDto userCard = userCardRepository.findUSerCardBySerialNumber(serialNumber, cvc, password);
        return userCard;
    }

    public List<UserCardDto> findUserCardByUuid(Integer uuid) {
        return userCardRepository.findUserCardListByUuid(uuid);
    }

    //결제 후 실적 확인
    public void PerformanceCheck(Integer UserCardId){
        UserCard userCard = userCardRepository.findById(UserCardId).get();
        Card card = cardRepository.findById(userCard.getCard().getId()).get();
        Performance performance = performanceRepository.findPerformance(null,card.getId(),userCard.getPerformanceLevel()).get(0);
        if (performance.getLevelPrice()>=userCard.getTotalPrice()){
            userCard.setPerformanceLevel(userCard.getPerformanceLevel()+1);
            userCardRepository.save(userCard);
        }
    }
}
