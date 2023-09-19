package com.bank.card_history.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum TransactionType {
    할부(1,"할부"),
    일시불(2,"일시불");

    private final Integer code;
    private final String name;

}
