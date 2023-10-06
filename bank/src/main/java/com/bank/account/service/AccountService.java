package com.bank.account.service;

import com.bank.account.dto.AccountRegistDto;
import com.bank.account.entity.Account;
import com.bank.account.repository.AccountRepository;
import com.bank.bank.entity.Bank;
import com.bank.bank.repository.BankRepository;
import com.bank.user.entity.User;
import com.bank.user.repository.UserRepository;
import com.bank.user.repository.UserRepositoryImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AccountService {
    private final AccountRepository accountRepository;
    private final UserRepository userRepository;
    private final BankRepository bankRepository;

    //계좌 등록
    public void resistAccount(AccountRegistDto accountRegistDto){
        Integer uuid = accountRegistDto.getUuid();
        Integer bankId = accountRegistDto.getBankId();
        Optional<User> user = userRepository.findUser(uuid,null);
        Optional<Bank> bank = bankRepository.findById(bankId);

        Account account = Account.builder()
                .user(user.get())
                .bank(bank.get())
                .num(accountRegistDto.getAccountNum())
                .build();
        accountRepository.save(account);
    }

    //계좌 조회
    public List<Account> findAccount(Integer id, Integer uuid, Integer bankId, String accountNum){
        List<Account> findAccount = accountRepository.findAccount(id, uuid, bankId,accountNum);

        return findAccount;
    }

    //계좌 삭제
    public void deleteAccount(int id) {
        List<Account> findAccount = findAccount(id,null,null,null);
        Account account = findAccount.get(0);
        account.setWithdrawDate(LocalDateTime.now());

        accountRepository.save(account);
    }

    //출금(돈 나감)
    public Integer minus(String accountNum, int price){
        List<Account> findAccount = findAccount(null,null,null,accountNum);
        Account account = findAccount.get(0);
        if (account.getBalance()<price){
            throw new IllegalArgumentException("잔액이 부족합니다.");
        }
        Integer result = account.getBalance()-price;
        account.setBalance(result);

        accountRepository.save(account);
        return account.getBalance();
    }

    //입금(돈 들어옴)
    public void plus(String accountNum, int price){
        List<Account> findAccount = findAccount(null,null,null, accountNum);
        Account account = findAccount.get(0);
        Integer result = account.getBalance()+price;
        account.setBalance(result);

        accountRepository.save(account);
    }

}
