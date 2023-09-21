package com.bank.user.repository;

import com.bank.user.entity.User;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import java.util.Optional;

import static com.bank.user.entity.QUser.user;

@RequiredArgsConstructor
public class UserRepositoryImpl implements UserRepositoryCustom {

    private final JPAQueryFactory jpaQueryFactory;

    //동적쿼리 사용
    //uuid만 들어오면 uuid로 검색
    //tel만 들어오면 tel로 검색
    @Override
    public Optional<User> findUser(Integer uuid, String tel) {
        return Optional.ofNullable(jpaQueryFactory
                .selectFrom(user)
                .where(uuidEq(uuid),
                        telEq(tel))
                .fetchOne());
    }

    private static BooleanExpression telEq(String tel) {
        return tel != null ? user.tel.eq(tel) : null;
    }

    private static BooleanExpression uuidEq(Integer uuid) {
        return uuid != null ? user.uuid.eq(uuid) : null;
    }
}
