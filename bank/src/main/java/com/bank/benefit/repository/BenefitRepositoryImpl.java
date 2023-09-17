package com.bank.benefit.repository;

import com.bank.benefit.dto.BenefitInfoResponseDto;
import com.bank.benefit.entity.Benefit;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import java.util.List;

import static com.bank.benefit.entity.QBenefit.benefit;
import static com.bank.card.entity.QCard.card;
import static com.bank.card.entity.QUserCard.userCard;


@RequiredArgsConstructor
public class BenefitRepositoryImpl implements BenefitRepositoryCustom {

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

    @Override
    public List<BenefitInfoResponseDto> findBenefitByCardList(List<Integer> cardUuidList, String category, String storeName) {

        return jpaQueryFactory
                .select(Projections.fields(BenefitInfoResponseDto.class,
                        benefit.category,
                        benefit.storeName,
                        benefit.limit,
                        benefit.discount,
                        userCard.id.as("cardUuid")))
                .from(benefit)
                .join(benefit.card, card)
                .join(card.userCards, userCard)
                .on(userCard.id.in(cardUuidList),
                        benefit.category.eq(category),
                        benefit.storeName.eq(storeName))
                .fetch();
    }
}
