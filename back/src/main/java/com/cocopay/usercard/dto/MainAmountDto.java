package com.cocopay.usercard.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class MainAmountDto {
    private Long allPrice;
    private int allDiscountAmount;
}
