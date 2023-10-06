package com.bank.installment.dto;

import lombok.Getter;

@Getter
public class InstallmentRegistDto {

    private int cardUuid;

    private int total;

    private int period;
}
