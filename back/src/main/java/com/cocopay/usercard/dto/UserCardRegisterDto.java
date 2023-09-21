package com.cocopay.usercard.dto;

import lombok.Data;

@Data
public class UserCardRegisterDto {
    //사용자 id
    private int userId;
    //카드 고유번호
    private String serialNumber;
    //cvc
    private String cvc;
    //유효기간
    private String validDate;
    //비밀번호 앞자리
    private String password;
}
