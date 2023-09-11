package com.bank.cardhistory.repository;

import com.bank.cardhistory.dto.HistoryFindDto;
import com.bank.cardhistory.entity.CardHistory;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import java.util.List;

import static com.bank.cardhistory.entity.QCardHistory.cardHistory;

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
