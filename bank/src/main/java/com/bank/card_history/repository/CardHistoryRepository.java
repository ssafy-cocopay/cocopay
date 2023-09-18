package com.bank.card_history.repository;

import com.bank.card_history.entity.CardHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CardHistoryRepository extends JpaRepository<CardHistory, Integer>, CardHistoryRepositoryCustom {
}
