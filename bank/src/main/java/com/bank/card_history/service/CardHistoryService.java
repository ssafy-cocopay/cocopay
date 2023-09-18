package com.bank.card_history.service;

import com.bank.card_history.dto.HistoryFindDto;
import com.bank.card_history.entity.CardHistory;
import com.bank.card_history.repository.CardHistoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CardHistoryService {

    private final CardHistoryRepository cardHistoryRepository;

    public List<CardHistory> getCardHistory(HistoryFindDto historyFindDto) {
        return cardHistoryRepository.getCardHistory(historyFindDto);
    }
}
