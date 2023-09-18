package com.bank.benefit.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BenefitInfoResponseDto {
    private Integer benefitId;

    private Integer cardUuid;

    private String category;

    private String storeName;

    private Integer discount;

    private Integer limit;

    private int discountAmount;
}
