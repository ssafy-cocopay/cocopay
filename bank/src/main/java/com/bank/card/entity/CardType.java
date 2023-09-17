package com.bank.card.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
@AllArgsConstructor
@Getter
public enum CardType {
    CHECK_CARD(1, "체크카드"),
    CREDIT_CARD(2, "신용카드");

    private final Integer code;
    private final String name;
}
