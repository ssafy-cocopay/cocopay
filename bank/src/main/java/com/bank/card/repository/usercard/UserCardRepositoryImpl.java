package com.bank.card.repository.usercard;


import com.bank.card.dto.UserCardResponseDto;
import com.bank.card.entity.UserCard;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.expression.spel.ast.Projection;

import java.util.List;
import java.util.Optional;


@RequiredArgsConstructor
public class UserCardRepositoryImpl implements UserCardRepositoryCustom {

    private final JPAQueryFactory jpaQueryFactory;

    @Override
    public List<UserCard> findUserCardByUUID(Integer uuid) {
//        return jpaQueryFactory
//                .select(new QUserCardResponseDto(user))
//                .from(userCard)
//                .where(userCard.account.user.uuid.eq(uuid)).fetch();
        return null;
    }
}
