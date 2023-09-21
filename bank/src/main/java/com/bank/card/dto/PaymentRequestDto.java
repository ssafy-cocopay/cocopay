package com.bank.card.dto;

import com.bank.card_history.entity.DiscountType;
import com.bank.card_history.entity.TransactionType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PaymentRequestDto {
    private Integer cardUuid;
    private Integer benefitId;
    private Integer requestPrice;
    private String category;
    private String store;
    private DiscountType discountType;
    private TransactionType transactionType;
}
