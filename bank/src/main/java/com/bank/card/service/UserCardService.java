package com.bank.card.service;

import com.bank.account.service.AccountService;
import com.bank.benefit.entity.Benefit;
import com.bank.benefit.entity.UserCardBenefit;
import com.bank.benefit.repository.BenefitRepository;
import com.bank.benefit.repository.UserCardBenefitRepository;
import com.bank.card.dto.PaymentRequestDto;
import com.bank.card.dto.PerformanceResponseDto;
import com.bank.card.entity.UserCard;
import com.bank.card.repository.usercard.UserCardRepository;
import com.bank.card_history.entity.CardHistory;
import com.bank.card_history.repository.CardHistoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserCardService {

    private final UserCardRepository userCardRepository;
    private final UserCardBenefitRepository userCardBenefitRepository;
    private final BenefitRepository benefitRepository;
    private final AccountService accountService;
    private final CardHistoryRepository cardHistoryRepository;

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

    public void paymentWithoutBenefitId(PaymentRequestDto paymentRequestDto) {
        Integer benefitId = benefitRepository.findBenefitByCardList(Collections.singletonList(paymentRequestDto.getCardUuid()), paymentRequestDto.getCategory(), paymentRequestDto.getStoreName())
                .get(0).getBenefitId();

        //benefit id가 조회가 안됐다면 적용되는 할인이 없으므로, 결제 프로세스 진행하면됨
        if (benefitId == null) {
            UserCard userCard = userCardRepository.findById(paymentRequestDto.getCardUuid()).get();
            accountService.minus(userCard.getAccount().getNum(), paymentRequestDto.getRequestPrice());
            //cardHistoryRepository.save();
        }
        //benefit id가 조회가 됐다면 할인 적용해서 결제 프로세스 진행하면 됨.
        else paymentWithBenefitId(paymentRequestDto);
    }

    public void paymentWithBenefitId(PaymentRequestDto paymentRequestDto) {
        Integer cardUuid = paymentRequestDto.getCardUuid();
        Integer benefitId = paymentRequestDto.getBenefitId();
        Optional<Benefit> findBenefit = benefitRepository.findById(benefitId);
        Integer discountPrice = paymentRequestDto.getRequestPrice() * ((100 - findBenefit.get().getDiscount()) / 100); //할인율이 적용된 가격

        //할인한도까지의 남은 금액 가져오기
        UserCardBenefit findUserCardBenefit = userCardBenefitRepository.findUserCardBenefit(cardUuid, benefitId);
        Integer discountAmount = findUserCardBenefit.getDiscountAmount();

        UserCard userCard = userCardRepository.findById(paymentRequestDto.getCardUuid()).get();
        accountService.minus(userCard.getAccount().getNum(), paymentRequestDto.getRequestPrice());

        if (discountAmount > discountPrice) {
            //할인율 적용된 가격으로 결제 때리고, 결제내역 남기기, 할인현황 수정하기
            accountService.minus(userCard.getAccount().getNum(), discountPrice);

            //결제내역 남기기
            //cardHistoryRepository.save();

            //할인현황 수정하기
            findUserCardBenefit.setDiscountAmount(discountAmount - discountPrice);
            userCardBenefitRepository.save(findUserCardBenefit);
        } else { //할인현황으로 결제하고, 할인현황 수정하기
            accountService.minus(userCard.getAccount().getNum(), discountAmount);
            //cardHistoryRepository.save();
            findUserCardBenefit.setDiscountAmount(0);
            userCardBenefitRepository.save(findUserCardBenefit);

        }


    }
}
