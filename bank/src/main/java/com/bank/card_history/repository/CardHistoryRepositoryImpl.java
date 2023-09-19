package com.bank.card_history.repository;

import com.bank.card_history.dto.HistoryFindDto;
import com.bank.card_history.entity.CardHistory;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import java.util.List;

import static com.bank.card_history.entity.QCardHistory.cardHistory;

@RequiredArgsConstructor
public class CardHistoryRepositoryImpl implements CardHistoryRepositoryCustom {

    private final JPAQueryFactory jpaQueryFactory;

    @Override
    public List<CardHistory> getCardHistory(HistoryFindDto historyFindDto) {
        return jpaQueryFactory.selectFrom(cardHistory)
                .where(cardHistory.userCard.id.eq(historyFindDto.getCardUuid()),
                        cardHistory.transactionDate.between(historyFindDto.getStartDate(), historyFindDto.getEndDate()))
                .fetch();
    }
}
