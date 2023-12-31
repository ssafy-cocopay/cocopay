package com.bank.account.controller;

import com.bank.account.dto.AccountFindDto;
import com.bank.account.dto.AccountRegistDto;
import com.bank.account.mapper.AccountMapper;
import com.bank.account.dto.AccountResponseDto;
import com.bank.account.entity.Account;
import com.bank.account.service.AccountService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/bank/account")
public class AccountController {

    private final AccountService accountService;
    private final AccountMapper accountMapper;

    //계좌 등록
    @PostMapping("/regist")
    public ResponseEntity registAccount(@RequestBody AccountRegistDto accountRegistDto){

        accountService.resistAccount(accountRegistDto);
        return ResponseEntity.ok("계좌 등록 완료");
    }

    //계좌 조회
    @GetMapping
    public ResponseEntity<List<AccountResponseDto>> findAccount(@RequestBody AccountFindDto accountFindDto) {
        List<Account> all = accountService.findAccount(accountFindDto.getId(), accountFindDto.getUuid(), accountFindDto.getBankId(), accountFindDto.getAccountNum());
        List<AccountResponseDto> responseList = accountMapper.TodtoList(all);

        return ResponseEntity.ok(responseList);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteAccount(@PathVariable("id") Integer id) {
        accountService.deleteAccount(id);

        return ResponseEntity.ok("회원 탈퇴 완료");
    }


}
