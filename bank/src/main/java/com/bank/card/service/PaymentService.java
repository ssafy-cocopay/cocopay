package com.bank.card.service;

import com.bank.account.service.AccountService;
import com.bank.benefit.dto.BenefitInfoResponseDto;
import com.bank.benefit.entity.UserCardBenefit;
import com.bank.benefit.repository.BenefitRepository;
import com.bank.benefit.repository.UserCardBenefitRepository;
import com.bank.benefit.service.BenefitService;
import com.bank.card.dto.CardFindDto;
import com.bank.card.dto.PaymentRequestDto;
import com.bank.card.entity.CardType;
import com.bank.card.entity.UserCard;
import com.bank.card.repository.usercard.UserCardRepository;
import com.bank.card_history.entity.CardHistory;
import com.bank.card_history.entity.DiscountType;
import com.bank.card_history.entity.TransactionType;
import com.bank.card_history.mapper.CardHistoryMapper;
import com.bank.card_history.repository.CardHistoryRepository;
import com.bank.installment.entity.Installment;
import com.bank.installment.repository.InstallmentRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class PaymentService {
    private final UserCardRepository userCardRepository;
    private final UserCardBenefitRepository userCardBenefitRepository;
    private final BenefitRepository benefitRepository;
    private final BenefitService benefitService;
    private final AccountService accountService;
    private final CardHistoryRepository cardHistoryRepository;
    private final CardHistoryMapper cardHistoryMapper;
    private final InstallmentRepository installmentRepository;

    public Integer calculateDiscountPrice(Integer requestPrice, Integer discount) {
        return (int) (requestPrice * (double) (discount * 0.01));
    }

    public void print(Integer requestPrice) {

    }

    public Integer checkDiscount() {
        return null;
    }

    public PaymentRequestDto checkBenefit(PaymentRequestDto paymentRequestDto) {
        Integer discountedPrice = paymentRequestDto.getRequestPrice();

        //혜택 불러오기
        log.info("혜택 불러오기-----------------");
        log.info(paymentRequestDto.getCategory().name());
        List<BenefitInfoResponseDto> result = benefitRepository.findBenefitByCardList(Collections.singletonList(paymentRequestDto.getCardUuid()),
                paymentRequestDto.getCategory(),
                paymentRequestDto.getStore());

        //전월실적 달성여부 불러오기
        UserCard findUserCard = userCardRepository.findById(paymentRequestDto.getCardUuid()).orElseThrow(() -> new RuntimeException("유저카드 not found"));

        //혜택 체킹
        if (result.size() != 0 && findUserCard.getIsPerformanced()) { //혜택이 있고, 전월실적이 달성되었다면
            log.info("할인 O --------------------");
            //혜택율 계산
            Integer discountPrice = calculateDiscountPrice(paymentRequestDto.getRequestPrice(), result.get(0).getDiscount());
            //혜택 현황 조회 -> 할인한도 남은 금액 조회
            UserCardBenefit findUserCardBenefit = userCardBenefitRepository.findUserCardBenefit(paymentRequestDto.getCardUuid(), result.get(0).getBenefitId());
            Integer discountAmount = findUserCardBenefit.getDiscountAmount(); // 사용자 한도 남은 금액
            DiscountType discountType = result.get(0).getDiscountType();

            //리팩토링
            if (discountAmount >= discountPrice) { //혜택 한도 체킹
                if (discountType.equals(DiscountType.페이백) || discountType.equals(DiscountType.청구할인)) {
                } else if (discountType.equals(DiscountType.현장할인)) discountedPrice -= discountPrice;
                else throw new RuntimeException("discountType not found");

                paymentRequestDto.updatePrice(discountedPrice, discountPrice, discountType, findUserCard);
                paymentRequestDto.print();
                return paymentRequestDto;

            } else { //할인한도가 부족할 때
                discountPrice = discountAmount;
                if (discountType.equals(DiscountType.페이백) || discountType.equals(DiscountType.청구할인)) {
                } else if (discountType.equals(DiscountType.현장할인)) discountedPrice -= discountPrice;
                else throw new RuntimeException("discountType not found");

                paymentRequestDto.updatePrice(discountedPrice, discountPrice, discountType, findUserCard);
                paymentRequestDto.print();
                return paymentRequestDto;
            }

        } else { // 혜택이 없거나, 혜택을 적용할수 없을 때
            ;
        }

        return paymentRequestDto;
    }

    // 신용카드일때 페이백은 없음.
    public void payment(PaymentRequestDto paymentRequestDto) {
        TransactionType transactionType = paymentRequestDto.getTransactionType();
        CardFindDto card = userCardRepository.findCardType(paymentRequestDto.getCardUuid());
        CardType cardType = card.getCardType();

        if (transactionType.equals(TransactionType.할부)) {
            if (cardType.equals(CardType.체크카드)) throw new RuntimeException("잘못된 접근");
            else { //신용카드
                CardHistory cardHistory = cardHistoryMapper.payRequestDtoToHistory(paymentRequestDto, card.getBalance());
                cardHistoryRepository.save(cardHistory);

                // 할부 테이블 업로드
                Installment installment = Installment.builder()
                        .divisionPrice(paymentRequestDto.getDiscountedPrice() / paymentRequestDto.getInstallmentMonth())
                        .paymentCount(0)
                        .total(paymentRequestDto.getDiscountedPrice())
                        .period(paymentRequestDto.getInstallmentMonth())
                        .userCard(paymentRequestDto.getUserCard())
                        .build();
                installmentRepository.save(installment);
            }
        } else { // 일시불
            if (cardType.equals(CardType.체크카드)) {
                Integer accountBalance = accountService.minus(paymentRequestDto.getUserCard().getAccount().getNum(), paymentRequestDto.getDiscountedPrice());
                CardHistory cardHistory = cardHistoryMapper.payRequestDtoToHistory(paymentRequestDto, accountBalance);
                cardHistoryRepository.save(cardHistory);

                // 페이백이라면 이용내역 업로드 한번 더
            } else { //신용카드
                CardHistory cardHistory = cardHistoryMapper.payRequestDtoToHistory(paymentRequestDto, card.getBalance());
                cardHistoryRepository.save(cardHistory);

                // 할부 테이블 업로드
                Installment installment = Installment.builder()
                        .divisionPrice(paymentRequestDto.getDiscountedPrice() / paymentRequestDto.getInstallmentMonth())
                        .paymentCount(0)
                        .total(paymentRequestDto.getDiscountedPrice())
                        .period(paymentRequestDto.getInstallmentMonth())
                        .userCard(paymentRequestDto.getUserCard())
                        .build();
                installmentRepository.save(installment);
            }
        }

        //totalprice 업로드
        int updatedTotalPrice = paymentRequestDto.getUserCard().getTotalPrice() + paymentRequestDto.getDiscountedPrice();
        UserCard userCard = paymentRequestDto.getUserCard();
        userCard.setTotalPrice(updatedTotalPrice);
        userCardRepository.save(userCard);

        //할인 현황 업데이트

    }
}
