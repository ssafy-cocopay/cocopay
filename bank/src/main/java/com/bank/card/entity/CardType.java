package com.bank.card.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
@AllArgsConstructor
@Getter
public enum CardType {
    CHECK_CARD(1),
    CREDIT_CARD(2);

    private final Integer code;
}
