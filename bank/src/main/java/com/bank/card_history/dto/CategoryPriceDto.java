package com.bank.card_history.dto;

import com.bank.card_history.entity.Category;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CategoryPriceDto {
    private Category category;
    private Long price;
    private String pricePercent;

}
