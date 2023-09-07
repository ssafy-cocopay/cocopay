package com.bank.card.repository.usercard;

import com.bank.card.entity.UserCard;

import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;


import java.util.List;
import java.util.Optional;

import static com.bank.card.entity.QUserCard.userCard;


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
}
