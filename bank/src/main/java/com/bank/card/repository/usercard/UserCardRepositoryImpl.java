package com.bank.card.repository.usercard;

import com.bank.card.dto.PerformanceResponseDto;
import com.bank.card.dto.UserCardResponseDto;
import com.bank.card.entity.UserCard;

import com.querydsl.core.types.Expression;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.CaseBuilder;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;


import java.util.List;
import java.util.Optional;

import static com.bank.card.entity.QUserCard.userCard;
import static com.bank.card.entity.QCard.card;


@RequiredArgsConstructor
public class UserCardRepositoryImpl implements UserCardRepositoryCustom {

    private final JPAQueryFactory jpaQueryFactory;

    @Override
    public List<UserCard> findUserCardByUUID(Integer uuid) {
        return jpaQueryFactory
                .selectFrom(userCard)
                .where(userCard.account.user.uuid.eq(uuid)).fetch();

//        .join(userCard.account, account).fetchJoin()
//                .join(account.user, user).fetchJoin()
    }

    //추후 리팩토링
    //가독성 너무 개판임
    //이게..최선인가..?
    @Override
    public Optional<PerformanceResponseDto> findUserCardPerformance(Integer cardUuid) {
        BooleanExpression isPerformance = new CaseBuilder()
                .when(userCard.userPerformance.goe(userCard.card.performance))
                .then(true)
                .otherwise(false);


        return Optional.ofNullable(jpaQueryFactory
                .select(Projections.bean(PerformanceResponseDto.class,
                                userCard.id.as("cardUuid"),
                                userCard.card.performance,
                                userCard.userPerformance,
                                isPerformance.as("isPerformance"),
                                userCard.isPerformanced.as("isPerformancePre")))
                .from(userCard)
                .leftJoin(userCard).fetchJoin()
                .where(userCard.id.eq(cardUuid))
                .fetchOne());
    }
}
