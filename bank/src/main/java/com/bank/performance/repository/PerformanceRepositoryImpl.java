package com.bank.performance.repository;

import com.bank.performance.entity.Performance;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import java.util.List;

import static com.bank.performance.entity.QPerformance.performance;

@RequiredArgsConstructor
public class PerformanceRepositoryImpl implements PerformanceRepositoryCustom {
    private final JPAQueryFactory jpaQueryFactory;

    //실적 조회
    //실적id만 들어오면 id로 검색
    //카드id만 들어오면 cardId로 검색
    //실적단계만 들어오면 level로 검색

    @Override
    public List<Performance> findPerformance(Integer id, Integer cardId, Integer level){
        return (List<Performance>) jpaQueryFactory
                .selectFrom(performance)
                .where(idEq(id),
                        cardIdEq(cardId),
                        levelEq(level)
                ).fetch();
    }

    private static BooleanExpression idEq(Integer id) {
        return id != null ? performance.id.eq(id) : null;
    }

    private static BooleanExpression cardIdEq(Integer cardId) {
        return cardId != null ? performance.card.id.eq(cardId) : null;
    }

    private static BooleanExpression levelEq(Integer level) {
        return level != null ? performance.level.eq(level) : null;
    }
}
