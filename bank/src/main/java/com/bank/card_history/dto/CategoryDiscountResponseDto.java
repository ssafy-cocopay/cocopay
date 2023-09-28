package com.bank.card_history.dto;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Builder
@Getter
public class CategoryDiscountResponseDto {
    private int allDiscountAmount;
    private List<CategoryDiscountDto> categoryList;
}
