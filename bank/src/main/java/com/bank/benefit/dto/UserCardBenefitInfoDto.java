package com.bank.benefit.dto;

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

    private String category;

    private String storeName;
}
