package com.bank.card.dto;

import lombok.Getter;

@Getter
public class UserCardRegisterDto {
    private Integer accountId;
    private Integer cardId;
    private String cardNickName;
    private String serialNumber;
    private Integer userPerformance;
    private Boolean isPerformanced;

}
