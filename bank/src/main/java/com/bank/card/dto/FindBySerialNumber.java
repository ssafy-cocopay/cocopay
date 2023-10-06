package com.bank.card.dto;

import lombok.Getter;

@Getter
public class FindBySerialNumber {
    //카드 고유번호
    private String serialNumber;
    //cvc
    private String cvc;
    //유효기간
    private String validDate;
    //비밀번호 앞자리
    private String password;
}
