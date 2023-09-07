package com.bank.account.controller;

import com.bank.account.dto.AccountRegistDto;
import com.bank.account.mapper.AccountMapper;
import com.bank.account.service.AccountService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
//        accountService.resistAccount(accountMapper.accountRegistDtoToAccount(accountRegistDto));

        accountService.resistAccount(accountRegistDto);
        return ResponseEntity.ok("계좌 등록 완료");
    }

//    @DeleteMapping("/{id}")
//    public ResponseEntity deleteAccount(@PathVariable("id") Integer id) {
//        accountService.deleteAccount(id);
//
//        return ResponseEntity.ok("회원 탈퇴 완료");
//    }


}
