//package com.bank.account.service;
//
//import com.bank.account.dto.AccountRegistDto;
//import com.bank.account.entity.Account;
//import com.bank.account.repository.AccountRepository;
//import com.bank.user.entity.User;
//import com.bank.user.repository.UserRepository;
//import com.bank.user.repository.UserRepositoryImpl;
//import lombok.RequiredArgsConstructor;
//import org.springframework.stereotype.Service;
//
//import java.time.LocalDateTime;
//import java.util.Optional;
//
//@Service
//@RequiredArgsConstructor
//public class AccountService {
//    private final AccountRepository accountRepository;
//    private final UserRepository userRepository;
//
//    //계좌 등록
//    public void resistAccount(AccountRegistDto accountRegistDto){
//        Integer uuid = accountRegistDto.getUuid();
//        Optional<User> user = userRepository.findUser(uuid,"");
//
//
//        accountRepository.save(account);
//    }
//
////    //계좌 조회
////    public Account findAccount(Integer id, Integer uuid, Integer bankId){
////        Optional<Account> findAccount = accountRepository.
////    }
//
////    public void deleteAccount(int id) {
////        Account findAccount = findAccount(id, null);
////
////        findAccount.setWithdrawDate(LocalDateTime.now());
////
////        userRepository.save(findUser);
////    }
//
//}
