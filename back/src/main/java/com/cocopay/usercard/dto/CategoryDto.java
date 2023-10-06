package com.cocopay.usercard.dto;


import com.cocopay.usercard.entity.Category;
import lombok.Getter;

@Getter
public class CategoryDto {
    private Category category;
    private Long price;
    private int discountAmount;
    private double pricePercent;
    private double discountPercent;

}
