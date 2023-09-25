package com.bank.card_history.repository;

import com.bank.card_history.dto.CategoryDto;
import com.bank.card_history.dto.HistoryFindDto;
import com.bank.card_history.dto.TotalByMonth;
import com.bank.card_history.entity.CardHistory;

import java.time.LocalDateTime;
import java.util.List;

public interface CardHistoryRepositoryCustom {
    List<CardHistory> getCardHistory(HistoryFindDto historyFindDto);

    List<CategoryDto> getCardHistoryByCategory(List<Integer> userCardList, long totalPayByMonth, int totalDiscountByMonth, int month);

    TotalByMonth getTotalByMonth(List<Integer> cardUuidList, int month);
}
