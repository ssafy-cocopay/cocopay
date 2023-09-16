package com.bank.benefit.repository;

import com.bank.benefit.entity.Benefit;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;


import java.util.List;

import static com.bank.benefit.entity.QBenefit.benefit;
import static com.bank.card.entity.QCard.card;
import static com.bank.card.entity.QUserCard.userCard;


@RequiredArgsConstructor
public class BenefitRepositoryImpl implements BenefitRepositoryCustom{
    private final JPAQueryFactory jpaQueryFactory;
    @Override
    public List<Benefit> getBenefitListByCardUid(Integer cardUuid) {
        return jpaQueryFactory
                .selectFrom(benefit)
                .leftJoin(benefit.card, card)
                .leftJoin(card.userCards, userCard)
                .on(userCard.id.eq(cardUuid))
                .fetch();
    }
}
