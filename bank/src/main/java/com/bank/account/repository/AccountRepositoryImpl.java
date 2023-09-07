//package com.bank.account.repository;
//
//import com.bank.account.entity.Account;
//import com.querydsl.jpa.impl.JPAQueryFactory;
//import lombok.RequiredArgsConstructor;
//
//import java.util.Optional;
//
//import static com.bank.account.entity.QAccount.account;
//
//@RequiredArgsConstructor
//public class AccountRepositoryImpl implements AccountRepositoryCustom{
//    private final JPAQueryFactory jpaQueryFactory;
//
//    //사용자uuid만 들어오면 uuid로 검색
//    //은행id만 들어오면 bankId로 검색
//    @Override
//    public Optional<Account> findAccount(Integer uuid, Integer bankId) {
//        return Optional.ofNullable(jpaQueryFactory
//                .selectFrom(account))
//                .where(uuidEq(user.uuid),
//                        telEq(tel),
//                        user.withdrawDate.isNull())
//                .fetchOne()
//)
//    }
//}
