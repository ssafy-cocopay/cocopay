package com.bank.cardhistory.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum DiscountType {
    CLAIM(1, "청구할인"),
    PAYBACK(2, "페이백"),
    ONSITE(3, "현장할인");

    private final Integer code;
    private final String name;
}
