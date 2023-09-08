package com.bank.account_history.service;

import com.bank.account.entity.Account;
import com.bank.account.repository.AccountRepository;
import com.bank.account_history.dto.AccountHistoryRegistDto;
import com.bank.account_history.entity.AccountHistory;
import com.bank.account_history.repository.AccountHistoryRepository;
import com.bank.bank.entity.Bank;
import com.bank.user.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AccountHistoryService {
    private final AccountHistoryRepository accountHistoryRepository;
    private final AccountRepository accountRepository;

    //계좌 기록 등록
    public void registAccountHistory(AccountHistoryRegistDto accountHistoryRegistDto){
        //A가 무조건 -된 계좌(보내는 계좌)
        //B가 무조건 +된 계좌(받는 계좌)

        String sendAccountNum = accountHistoryRegistDto.getSendAccountNum();
        String receiveAccountNum = accountHistoryRegistDto.getReceiveAccountNum();
        Account sendAccount = accountRepository.findAccount(null, null, null, sendAccountNum).get(0);
        System.out.println(sendAccount.getNum());
        Account receiveAccount = accountRepository.findAccount(null, null, null, receiveAccountNum).get(0);
        System.out.println(receiveAccount.getNum());

        AccountHistory sendaccountHistory = AccountHistory
                .builder()
                .account(sendAccount)
                .amount(accountHistoryRegistDto.getPrice())
                .status(false)
                .store(receiveAccount.getNum())
                .balance(sendAccount.getBalance())
                .transaction_type(accountHistoryRegistDto.getTransaction_type())
                .build();

        AccountHistory receiveaccountHistory = AccountHistory
                .builder()
                .account(receiveAccount)
                .amount(accountHistoryRegistDto.getPrice())
                .status(true)
                .store(sendAccount.getNum())
                .balance(receiveAccount.getBalance())
                .transaction_type(accountHistoryRegistDto.getTransaction_type())
                .build();

        accountHistoryRepository.save(sendaccountHistory);
        accountHistoryRepository.save(receiveaccountHistory);
    }

    //계좌 기록 조회
    public List<AccountHistory> findAccountHistory(Integer id, Integer uuid, String accountNum){
        List<AccountHistory> findAccountHistory = accountHistoryRepository.findAccountHistory(id, uuid, accountNum);

        return findAccountHistory;
    }
}
