package com.cocopay.payment.apicall.dto.res;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BenefitResDto {
    private Integer benefitId;

    private Integer cardUuid;

    private String category;

    private String storeName;

    private Integer discount;

    private Integer limit;

    private int discountAmount;

    private String discountType;
}