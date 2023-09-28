package com.cocopay.usercard.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum CardType {
    체크(1, "체크"),
    신용(2, "신용");

    private final Integer code;
    private final String name;
}
