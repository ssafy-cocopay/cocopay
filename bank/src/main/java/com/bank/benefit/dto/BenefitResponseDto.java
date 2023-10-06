package com.bank.benefit.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BenefitResponseDto {
    private Integer benefitId;
    private Integer cardId;
    private String category;
    private String storeName;
    private Integer discount;
    private Integer limit;
}
