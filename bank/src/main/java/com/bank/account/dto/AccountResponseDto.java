package com.bank.account.dto;

import com.bank.bank.entity.Bank;
import com.bank.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AccountResponseDto {

    private Integer id;

    private String num;

    private int balance;

    private LocalDateTime registedDate;

    private LocalDateTime withdrawDate;

//    private User user;
    private String userName;

//    private Bank bank;
    private String bankName;
}
