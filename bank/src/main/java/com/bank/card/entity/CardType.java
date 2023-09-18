package com.bank.card.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
@AllArgsConstructor
@Getter
public enum CardType {
    체크카드(1, "체크카드"),
    신용카드(2, "신용카드");

    private final Integer code;
    private final String name;
}
