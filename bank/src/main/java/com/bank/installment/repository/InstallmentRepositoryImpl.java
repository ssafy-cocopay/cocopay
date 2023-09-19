package com.bank.installment.repository;

import com.bank.installment.entity.Installment;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import java.time.LocalDate;
import java.util.List;

import static com.bank.account.entity.QAccount.account;
import static com.bank.installment.entity.QInstallment.installment;
@RequiredArgsConstructor
public class InstallmentRepositoryImpl implements InstallmentRepositoryCustom {

    private final JPAQueryFactory jpaQueryFactory;

    //할부 조회
    //할부id만 들어오면 id로 검색
    //사용자카드id만 들어오면 cardId로 검색
    //사용날짜만 들어오면 transactionDate로 검색
    @Override
    public List<Installment> findInstallment(Integer id, Integer cardId){
        return (List<Installment>) jpaQueryFactory
                .selectFrom(installment)
                .where(idEq(id),
                        cardIdEq(cardId)
                ).fetch();
    }


    private static BooleanExpression idEq(Integer id) {
        return id != null ? installment.id.eq(id) : null;
    }
    private static BooleanExpression cardIdEq(Integer cardId) {
        return cardId != null ? installment.userCard.id.eq(cardId) : null;
    }

//    private static BooleanExpression transactionDateEq(LocalDate transactionDate) {
//        return transactionDate != null ? installment.transactionDate.eq(transactionDate) : null;
//    }

}
