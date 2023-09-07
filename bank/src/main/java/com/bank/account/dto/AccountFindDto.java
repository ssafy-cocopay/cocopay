package com.bank.account.dto;

import lombok.Getter;

@Getter
public class AccountFindDto {

    //계좌 id
    private Integer id;

    //사용자 id
    private Integer uuid;

    //은행 id
    private Integer bankId;
}
