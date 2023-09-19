package com.bank.account.repository;

import com.bank.account.entity.Account;

import java.util.List;

public interface AccountRepositoryCustom {
    List<Account> findAccount(Integer id, Integer uuid, Integer bankId, String accountNum);
}
