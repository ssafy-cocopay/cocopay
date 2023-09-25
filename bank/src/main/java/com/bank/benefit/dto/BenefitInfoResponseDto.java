package com.bank.benefit.dto;

import com.bank.card_history.entity.Category;
import com.bank.card_history.entity.DiscountType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BenefitInfoResponseDto {
    private Integer benefitId;

    private Integer cardUuid;

    private Category category;

    private String storeName;

    private Integer discount;

    private Integer limit;

    private int discountAmount;

    private DiscountType discountType;
}
