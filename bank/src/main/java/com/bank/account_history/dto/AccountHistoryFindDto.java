package com.bank.account_history.dto;

import lombok.Getter;

import java.time.LocalDate;

@Getter
public class AccountHistoryFindDto {

    //계좌기록 id
    private Integer id;

    //사용자 id
    private Integer uuid;

    //거래날짜
    private LocalDate transactionDate;

    //계좌번호
    private String accountNum;
}
