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
public class CategoryPriceResponseDto {
    private Long allPriceAmount;
    private List<CategoryPriceDto> categoryList;
}
