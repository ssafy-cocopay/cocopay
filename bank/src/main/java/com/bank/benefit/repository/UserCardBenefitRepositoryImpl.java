package com.bank.benefit.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import static com.bank.benefit.entity.QUserCardBenefit.userCardBenefit;

@RequiredArgsConstructor
public class UserCardBenefitRepositoryImpl implements UserCardBenefitRepositoryCustom {

    private final JPAQueryFactory jpaQueryFactory;

    @Override
    public Integer findDiscountAmount(Integer cardUuid, Integer benefitId) {
        return jpaQueryFactory
                .select(userCardBenefit.discountAmount)
                .from(userCardBenefit)
                .where(userCardBenefit.card.id.eq(cardUuid),
                        userCardBenefit.benefit.id.eq(benefitId))
                .fetchOne();
    }
}
