package com.bank.benefit.repository;

import com.bank.benefit.dto.BenefitInfoResponseDto;
import com.bank.benefit.entity.Benefit;
import com.bank.card_history.entity.Category;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import java.util.List;

import static com.bank.benefit.entity.QBenefit.benefit;
import static com.bank.benefit.entity.QUserCardBenefit.userCardBenefit;
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
    public List<BenefitInfoResponseDto> findBenefitByCardList(List<Integer> cardUuidList, Category category, String storeName) {

        return jpaQueryFactory
                .select(Projections.fields(BenefitInfoResponseDto.class,
                        benefit.id.as("benefitId"),
                        userCard.id.as("cardUuid"),
                        benefit.category,
                        benefit.storeName,
                        benefit.limit,
                        benefit.discount,
                        userCardBenefit.discountAmount,
                        benefit.discountType))
                .from(userCardBenefit)
                .join(userCardBenefit.benefit, benefit)
                .on(benefit.category.eq(category),
                        benefit.storeName.eq(storeName))
                .join(userCardBenefit.userCard, userCard)
                .on(userCard.id.in(cardUuidList))
                .fetch();
    }
}
