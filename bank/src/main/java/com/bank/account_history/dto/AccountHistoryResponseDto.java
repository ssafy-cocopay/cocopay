package com.bank.account_history.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AccountHistoryResponseDto {

    private Integer id;

    private LocalDateTime transactionDate;

    private int amount;

    private boolean status;

    private String store;

    private  int balance;

    private String transaction_type;

    //내 계좌번호
    private String accountNum;
}
