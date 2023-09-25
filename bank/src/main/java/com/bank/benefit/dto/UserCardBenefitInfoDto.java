package com.bank.benefit.dto;

import com.bank.card_history.entity.Category;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserCardBenefitInfoDto {
    private List<Integer> cardUuidList;

    private Category category;

    private String storeName;
}
