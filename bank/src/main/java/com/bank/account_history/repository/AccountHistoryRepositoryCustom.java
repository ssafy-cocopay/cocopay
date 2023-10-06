package com.bank.account_history.repository;

import com.bank.account_history.entity.AccountHistory;

import java.time.LocalDate;
import java.util.List;

public interface AccountHistoryRepositoryCustom {
    List<AccountHistory> findAccountHistory(Integer id, Integer uuid, String accountNum);
}
