package com.cocopay.usercard.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class CategoryResponseDto {
    private Long allPrice;
    private int allDiscountAmount;
    private List<CategoryDto> categoryDtoList;
}
