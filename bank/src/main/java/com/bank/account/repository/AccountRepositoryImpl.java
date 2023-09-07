package com.bank.account.repository;

import com.bank.account.entity.Account;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.Optional;

import static com.bank.account.entity.QAccount.account;
import static com.bank.user.entity.QUser.user;

@RequiredArgsConstructor
public class AccountRepositoryImpl implements AccountRepositoryCustom{
    private final JPAQueryFactory jpaQueryFactory;

    //카드 조회
    //사용자uuid만 들어오면 uuid로 검색
    //은행id만 들어오면 bankId로 검색
    @Override
    public List<Account> findAccount(Integer id, Integer uuid, Integer bankId) {
        return (List<Account>) jpaQueryFactory
                .selectFrom(account)
                .where(idEq(id),
                        uuidEq(uuid),
                        bankIdEq(bankId),
                        account.withdrawDate.isNull()).fetch();
    }

    private static BooleanExpression idEq(Integer id) {
        return id != null ? account.id.eq(id) : null;
    }
    private static BooleanExpression uuidEq(Integer uuid) {
        return uuid != null ? account.user.uuid.eq(uuid) : null;
    }

    private static BooleanExpression bankIdEq(Integer bankId) {
        return bankId != null ? account.bank.id.eq(bankId) : null;
    }

}
