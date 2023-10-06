package com.cocopay.usercard.dto;


import com.cocopay.usercard.entity.Category;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CategoryPriceDto {
    private Category category;
    private Long price;
    private String pricePercent;

}
