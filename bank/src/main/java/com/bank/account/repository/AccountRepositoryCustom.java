package com.bank.account.repository;

import com.bank.account.entity.Account;

import java.util.Optional;

public interface AccountRepositoryCustom {
    public Optional<Account> findAccount(Integer uuid, Integer bankId);
}
