package com.bank.card.repository.usercard;

import com.bank.card.entity.UserCard;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import java.util.Optional;

import static com.bank.card.entity.QUserCard.userCard;

@RequiredArgsConstructor
public class UserCardRepositoryImpl implements UserCardRepositoryCustom {

    private final JPAQueryFactory jpaQueryFactory;

    @Override
    public Optional<UserCard> findUserCardByUUID(Integer uuid) {
        return Optional.ofNullable(jpaQueryFactory.select(userCard).from(userCard).where(userCard.));
        //return null;
    }
}
