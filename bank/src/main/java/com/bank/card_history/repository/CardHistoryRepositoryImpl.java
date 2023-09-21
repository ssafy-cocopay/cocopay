package com.bank.card_history.repository;

import com.bank.card_history.dto.CategoryDto;
import com.bank.card_history.dto.HistoryFindDto;
import com.bank.card_history.entity.CardHistory;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;
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

    @Override
    public List<CategoryDto> getCardHistoryByCategory(List<Integer> userCardList, LocalDateTime startDate,LocalDateTime endDate) {
        return jpaQueryFactory.select(Projections.fields(CategoryDto.class,
                cardHistory.category, cardHistory.amount.sum().as("price"), cardHistory.discountAmount.sum().as("discountAmount")))
                .from(cardHistory)
                .where(cardHistory.userCard.id.in(userCardList), cardHistory.transactionDate.between(startDate,endDate))
                .groupBy(cardHistory.category)
                .fetch();
    }
}
