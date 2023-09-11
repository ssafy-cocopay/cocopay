package com.bank.cardhistory.repository;

import com.bank.cardhistory.dto.HistoryFindDto;
import com.bank.cardhistory.entity.CardHistory;

import java.util.List;

public interface CardHistoryRepositoryCustom {
    List<CardHistory> getCardHistory(HistoryFindDto historyFindDto);
}
