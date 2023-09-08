package com.bank.account_history.dto;

import lombok.Getter;

@Getter
public class AccountHistoryRegistDto {

    //보내는 계좌
    private String sendAccountNum;
    
    //받는 계좌
    private String receiveAccountNum;
    
    //금액
    private Integer price;
    
    //거래 유형
    private String transaction_type;

}
