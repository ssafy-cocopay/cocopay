package com.bank.cardhistory.service;

import com.bank.cardhistory.dto.HistoryFindDto;
import com.bank.cardhistory.entity.CardHistory;
import com.bank.cardhistory.repository.CardHistoryRepository;
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
