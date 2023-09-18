package com.bank.card.dto;

import lombok.Getter;

@Getter
public class UserCardRegisterDto {
    private Integer accountId;
    private Integer cardId;
    private String password;
    private String cardNickname;
    private String serialNumber;
    private Boolean isPerformanced;
    private String validDate;
    private String cvc;
    private Integer performanceLevel;


}
