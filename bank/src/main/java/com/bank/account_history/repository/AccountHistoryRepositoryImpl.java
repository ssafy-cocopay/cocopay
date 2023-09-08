package com.bank.account_history.repository;

import com.bank.account.entity.Account;
import com.bank.account_history.entity.AccountHistory;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import java.util.List;

import static com.bank.account_history.entity.QAccountHistory.accountHistory;


@RequiredArgsConstructor
public class AccountHistoryRepositoryImpl implements AccountHistoryRepositoryCustom {
    private final JPAQueryFactory jpaQueryFactory;

    //계좌 기록 조회
    //계좌 기록 id만 들어오면 id로 검색
    //사용자uuid만 들어오면 uuid로 검색
    //계좌번호만 들어오면 accountNum으로 검색
    @Override
    public List<AccountHistory> findAccountHistory(Integer id, Integer uuid, String accountNum){
        return (List<AccountHistory>) jpaQueryFactory
                .selectFrom(accountHistory)
                .where(idEq(id),
                        uuidEq(uuid),
                        accountNumEq(accountNum)).fetch();
    }

    private static BooleanExpression idEq(Integer id) {
        return id != null ? accountHistory.id.eq(id) : null;
    }
    private static BooleanExpression accountNumEq(String accountNum) {
        return accountNum != null ? accountHistory.account.num.eq(accountNum) : null;
    }
    private static BooleanExpression uuidEq(Integer uuid) {
        return uuid != null ? accountHistory.account.user.uuid.eq(uuid) : null;
    }



}
