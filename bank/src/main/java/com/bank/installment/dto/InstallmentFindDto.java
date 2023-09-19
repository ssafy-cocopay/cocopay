package com.bank.installment.dto;

import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class InstallmentFindDto {

    //할부 id
    private Integer id;

    //사용자카드 id
    private Integer cardId;

    //날짜
    private LocalDateTime transactionDate;
}
