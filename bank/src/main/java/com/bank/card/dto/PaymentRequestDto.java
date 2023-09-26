package com.bank.card.dto;

import com.bank.card.entity.UserCard;
import com.bank.card_history.entity.Category;
import com.bank.card_history.entity.DiscountType;
import com.bank.card_history.entity.TransactionType;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;

@Getter
@Slf4j
public class PaymentRequestDto {
    private Integer cardUuid;
    private Integer requestPrice;
    private Category category;
    private String store;
    private TransactionType transactionType;
    private Integer installmentMonth; //할부 몇개월? null 가능]

    private Integer discountedPrice;
    private Integer discountPrice;
    private DiscountType discountType;
    private UserCard userCard;
    private Integer cardHistoryId;

    public void updatePrice(Integer discountedPrice, Integer discountPrice, DiscountType discountType, UserCard userCard) {
        this.discountedPrice = discountedPrice;
        this.discountPrice = discountPrice;
        this.discountType = discountType;
        this.userCard = userCard;
    }

    public void updateHistory(Integer cardHistoryId) {
        this.cardHistoryId = cardHistoryId;
    }

    public void print() {
        log.info("처음에 요청한 금액 : " + requestPrice);
        log.info("할인금액 : " + discountPrice);
        log.info("할인 타입 " + discountType.name());
        log.info("최종 결제 금액 : " + discountedPrice);
    }
}
