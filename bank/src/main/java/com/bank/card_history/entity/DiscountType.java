package com.bank.card_history.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum DiscountType {
    청구할인(1, "청구할인"),
    페이백(2, "페이백"),
    현장할인(3, "현장할인");

    //DB에 열거형 클래스의 이름 그대로 저장됩니다.
    //영어로 저장할까요 한글로 저장할까요.

    private final Integer code;
    private final String name;
}
