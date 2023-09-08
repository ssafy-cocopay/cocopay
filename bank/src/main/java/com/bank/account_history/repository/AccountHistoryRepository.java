package com.bank.account_history.repository;

import com.bank.account.repository.AccountRepositoryCustom;
import com.bank.account_history.entity.AccountHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountHistoryRepository extends JpaRepository<AccountHistory,Integer>, AccountHistoryRepositoryCustom {

}
