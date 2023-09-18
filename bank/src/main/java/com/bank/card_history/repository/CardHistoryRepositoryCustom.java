package com.bank.card_history.repository;

import com.bank.card_history.dto.HistoryFindDto;
import com.bank.card_history.entity.CardHistory;

import java.util.List;

public interface CardHistoryRepositoryCustom {
    List<CardHistory> getCardHistory(HistoryFindDto historyFindDto);
}
