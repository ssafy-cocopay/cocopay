package com.bank.cardhistory.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum TransactionType {
    INSTALLMENT(1,"할부"),
    PAYALL(2,"일시불");

    private final Integer code;
    private final String name;

}
