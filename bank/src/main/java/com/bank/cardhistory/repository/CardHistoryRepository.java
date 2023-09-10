package com.bank.cardhistory.repository;

import com.bank.cardhistory.entity.CardHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CardHistoryRepository extends JpaRepository<CardHistory, Integer>, CardHistoryRepositoryCustom {
}
