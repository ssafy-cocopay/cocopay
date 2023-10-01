package com.bank.card_history.repository;

import com.bank.card_history.dto.CategoryDto;
import com.bank.card_history.dto.HistoryFindDto;
import com.bank.card_history.dto.HistoryResponseDto;
import com.bank.card_history.dto.TotalByMonth;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import java.util.List;

import static com.bank.card_history.entity.QCardHistory.cardHistory;

@RequiredArgsConstructor
public class CardHistoryRepositoryImpl implements CardHistoryRepositoryCustom {

    private final JPAQueryFactory jpaQueryFactory;

    @Override
    public List<HistoryResponseDto> getCardHistory(HistoryFindDto historyFindDto) {
        return jpaQueryFactory
                .select(Projections.fields(HistoryResponseDto.class,
                        cardHistory.amount,
                        cardHistory.transactionDate,
                        cardHistory.store,
                        cardHistory.discountAmount,
                        cardHistory.discountType,
                        cardHistory.transactionType))
                .from(cardHistory)
                .where(cardHistory.userCard.id.eq(historyFindDto.getCardUuid()),
                        cardHistory.transactionDate.month().eq(historyFindDto.getMonth()))
                .orderBy(cardHistory.transactionDate.desc())
                .fetch();
    }

    @Override
    public List<CategoryDto> getCardHistoryByCategory(List<Integer> userCardList, long totalPayByMonth, int totalDiscountByMonth, int month) {
        System.out.println(totalPayByMonth);
        System.out.println(totalDiscountByMonth);
        return jpaQueryFactory.select(Projections.fields(CategoryDto.class,
                cardHistory.category, cardHistory.amount.sum().as("price"), cardHistory.discountAmount.sum().as("discountAmount")))
                .from(cardHistory)
                .where(cardHistory.userCard.id.in(userCardList), cardHistory.transactionDate.month().eq(month))
                .groupBy(cardHistory.category)
                .fetch();
    }

    public TotalByMonth getTotalByMonth(List<Integer> cardUuidList, int month) {
        return jpaQueryFactory
                .select(Projections.fields(TotalByMonth.class,
                        cardHistory.amount.sum().as("totalPayByMonth"),
                        cardHistory.discountAmount.sum().as("totalDiscountByMonth")))
                .from(cardHistory)
                .where(cardHistory.userCard.id.in(cardUuidList),
                        cardHistory.transactionDate.month().eq(month))
                .fetchOne();

    }
}
