package com.bank.card_history.dto;

import lombok.Builder;
import lombok.Getter;

import java.util.List;
@Builder
@Getter
public class CategoryResponseDto {
    private Long allPriceAmount;
    private int allDiscountAmount;
    private List<CategoryDto> categoryList;
}
