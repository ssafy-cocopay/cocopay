package com.bank.card_history.repository;

import com.bank.card_history.dto.CategoryDto;
import com.bank.card_history.dto.HistoryFindDto;
import com.bank.card_history.dto.HistoryResponseDto;
import com.bank.card_history.dto.TotalByMonth;

import java.util.List;

public interface CardHistoryRepositoryCustom {
    List<HistoryResponseDto> getCardHistory(HistoryFindDto historyFindDto);

    List<CategoryDto> getCardHistoryByCategory(List<Integer> userCardList, long totalPayByMonth, int totalDiscountByMonth, int month);

    TotalByMonth getTotalByMonth(List<Integer> cardUuidList, int month);
}
