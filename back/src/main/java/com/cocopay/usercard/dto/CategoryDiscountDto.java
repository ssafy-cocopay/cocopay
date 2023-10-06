package com.cocopay.usercard.dto;

import com.cocopay.usercard.entity.Category;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CategoryDiscountDto {
    private Category category;
    private int discountAmount;
    private String discountPercent;

}
