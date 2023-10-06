package com.cocopay.usercard.repository;

import com.cocopay.usercard.entity.UserCard;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.Optional;

import static com.cocopay.usercard.entity.QUserCard.userCard;

@RequiredArgsConstructor
public class UserCardRepositoryImpl implements UserCardRepositoryCustom {

    private final JPAQueryFactory jpaQueryFactory;

    //코코카드 제외한 카드목록 조회
    @Override
    public List<UserCard> findUserCardListByCocoType(int userId) {

        return jpaQueryFactory
                .selectFrom(userCard)
                .where(userCard.user.id.eq(userId),
                        userCard.cocoType.eq(false),
                        userCard.withdrawDate.isNull())
                .orderBy(userCard.cardOrder.asc())
                .fetch();
    }

    @Override
    public List<UserCard> FindAllUserCard(int userId) {
        return jpaQueryFactory
                .selectFrom(userCard)
                .where(userCard.user.id.eq(userId), userCard.withdrawDate.isNull())
                .orderBy(userCard.cardOrder.asc())
                .fetch();
    }

    @Override
    public Optional<UserCard> findUserCardByUuid(int cardUuid) {
        return Optional.ofNullable(jpaQueryFactory
                .selectFrom(userCard)
                .where(userCard.cardUuid.eq(cardUuid))
                .fetchOne());
    }

    @Override
    public Optional<UserCard>  findByUserCardId(int userCardId) {
        return Optional.ofNullable(jpaQueryFactory
                .selectFrom(userCard)
                .where(userCard.cardUuid.eq(userCardId),
                        userCard.cocoType.eq(false), userCard.withdrawDate.isNull())
                .fetchOne());
    }
}
