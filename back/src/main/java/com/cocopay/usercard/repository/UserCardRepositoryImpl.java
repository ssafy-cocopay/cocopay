package com.cocopay.usercard.repository;

import com.cocopay.usercard.entity.UserCard;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import java.util.List;

import static com.cocopay.usercard.entity.QUserCard.userCard;

@RequiredArgsConstructor
public class UserCardRepositoryImpl implements UserCardRepositoryCustom{

    private final JPAQueryFactory jpaQueryFactory;
    
    //코코카드 제외한 카드목록 조회
    @Override
    public List<UserCard> findUserCardListByCocoType(int userId) {

        return jpaQueryFactory
                .selectFrom(userCard)
                .where(userCard.user.id.eq(userId),
                        userCard.cocoType.eq(true), userCard.withdrawDate.isNull())
                .fetch();
    }

    @Override
    public List<UserCard> FindUserCard(int userId) {
        return jpaQueryFactory
                .selectFrom(userCard)
                .where(userCard.user.id.eq(userId),userCard.withdrawDate.isNull())
                .fetch();
    }
}
