package com.bank.card.service;

import com.bank.account.service.AccountService;
import com.bank.benefit.dto.BenefitInfoResponseDto;
import com.bank.benefit.dto.BenefitResponseDto;
import com.bank.benefit.entity.Benefit;
import com.bank.benefit.entity.UserCardBenefit;
import com.bank.benefit.repository.BenefitRepository;
import com.bank.benefit.repository.UserCardBenefitRepository;
import com.bank.card.dto.PaymentRequestDto;
import com.bank.card.dto.FindBySerialNumber;
import com.bank.card.dto.PerformanceResponseDto;
import com.bank.card.dto.UserCardDto;
import com.bank.card.entity.UserCard;
import com.bank.card.repository.usercard.UserCardRepository;
import com.bank.card_history.entity.CardHistory;
import com.bank.card_history.mapper.CardHistoryMapper;
import com.bank.card_history.repository.CardHistoryRepository;
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
    private final BenefitRepository benefitRepository;
    private final AccountService accountService;
    private final CardHistoryRepository cardHistoryRepository;
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

    public void paymentWithoutBenefitId(PaymentRequestDto paymentRequestDto) {
        List<BenefitInfoResponseDto> result = benefitRepository.findBenefitByCardList(Collections.singletonList(paymentRequestDto.getCardUuid()),
                paymentRequestDto.getCategory(),
                paymentRequestDto.getStore());

        //benefit id가 조회가 안됐다면 적용되는 할인이 없으므로, 결제 프로세스 진행하면됨
        if (result.size() == 0) {
            UserCard userCard = userCardRepository.findById(paymentRequestDto.getCardUuid()).get();
            accountService.minus(userCard.getAccount().getNum(), paymentRequestDto.getRequestPrice());
            CardHistory cardHistory = cardHistoryMapper.payRequestDtoToHistory(paymentRequestDto, userCard, Long.valueOf(paymentRequestDto.getRequestPrice()), 0, null);
            cardHistoryRepository.save(cardHistory);
        }
        //benefit id가 조회가 됐다면 할인 적용해서 결제 프로세스 진행하면 됨.
        else paymentWithBenefitId(paymentRequestDto);
    }

    public void paymentWithBenefitId(PaymentRequestDto paymentRequestDto) {
        Integer cardUuid = paymentRequestDto.getCardUuid();
        Integer benefitId = paymentRequestDto.getBenefitId();
        Optional<Benefit> findBenefit = benefitRepository.findById(benefitId);
        Integer discount = (int) (paymentRequestDto.getRequestPrice() * ((findBenefit.get().getDiscount()) / 100.0)); //할인금액
        Integer discountPrice = paymentRequestDto.getRequestPrice() - discount; //할인되서 실제로 결제되는 금액

        log.info("할인율 : " + findBenefit.get().getDiscount());
        log.info("할인 금액 : " + discount);
        log.info("할인이 적용된 가격 : " + discountPrice);

        //할인한도까지의 남은 금액 가져오기
        UserCardBenefit findUserCardBenefit = userCardBenefitRepository.findUserCardBenefit(cardUuid, benefitId);
        Integer discountAmount = findUserCardBenefit.getDiscountAmount();

        log.info("할인한도까지 남은 금액 " + discountAmount);

        UserCard userCard = userCardRepository.findById(paymentRequestDto.getCardUuid()).get();
        accountService.minus(userCard.getAccount().getNum(), paymentRequestDto.getRequestPrice());

        if (discountAmount > discountPrice) {
            //할인율 적용된 가격으로 결제 때리고, 결제내역 남기기, 할인현황 수정하기
            accountService.minus(userCard.getAccount().getNum(), discountPrice);

            //결제내역 남기기
            CardHistory cardHistory = cardHistoryMapper.payRequestDtoToHistory(paymentRequestDto, userCard, Long.valueOf(discountPrice), 0, discount);
            cardHistoryRepository.save(cardHistory);

            //할인현황 수정하기
            findUserCardBenefit.setDiscountAmount(discountAmount - discountPrice);
            userCardBenefitRepository.save(findUserCardBenefit);
        } else { //할인현황으로 결제하고, 할인현황 수정하기
            accountService.minus(userCard.getAccount().getNum(), discountAmount);
            CardHistory cardHistory = cardHistoryMapper.payRequestDtoToHistory(paymentRequestDto, userCard, Long.valueOf(discountAmount), 0, discount);
            cardHistoryRepository.save(cardHistory);
            findUserCardBenefit.setDiscountAmount(0);
            userCardBenefitRepository.save(findUserCardBenefit);
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
}
