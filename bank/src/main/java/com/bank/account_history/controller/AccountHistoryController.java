package com.bank.account_history.controller;

import com.bank.account.service.AccountService;
import com.bank.account_history.dto.AccountHistoryFindDto;
import com.bank.account_history.dto.AccountHistoryRegistDto;
import com.bank.account_history.dto.AccountHistoryResponseDto;
import com.bank.account_history.entity.AccountHistory;
import com.bank.account_history.mapper.AccountHistoryMapper;
import com.bank.account_history.service.AccountHistoryService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/bank/accountHistory")
public class AccountHistoryController {

    private final AccountHistoryService accountHistoryService;
    private final AccountService accountService;
    private final AccountHistoryMapper accountHistoryMapper;

    //기록 등록
    @PostMapping("/regist")
    public ResponseEntity registAccountHistory(@RequestBody AccountHistoryRegistDto accountHistoryRegistDto) {
        //1. A계좌에서 -하기 -> 계좌 Service에서
        try {
            accountService.minus(accountHistoryRegistDto.getSendAccountNum()
                    , accountHistoryRegistDto.getPrice());
//        //2. 계좌기록에 -한거 넣기 -> 계좌기록 Service에서
//        accountHistoryService.
            //3. B계좌에서 +하기
            accountService.plus(accountHistoryRegistDto.getReceiveAccountNum()
                    , accountHistoryRegistDto.getPrice());
            //4. 계좌기록에 +한거 넣기
            accountHistoryService.registAccountHistory(accountHistoryRegistDto);
            return ResponseEntity.ok("계좌 기록 등록 완료");
        }
        catch(IllegalArgumentException e){
            return ResponseEntity.ok("계좌 기록 등록 실패 - 잔액이 없습니다.");
        }


    }

    //계좌 기록 조회
    @GetMapping
    public ResponseEntity<List<AccountHistoryResponseDto>> fingAccountHistory(@RequestBody AccountHistoryFindDto accountHistoryFindDto) {
        List<AccountHistory> all = accountHistoryService.findAccountHistory(accountHistoryFindDto.getId(), accountHistoryFindDto.getUuid(), accountHistoryFindDto.getAccountNum());

        List<AccountHistoryResponseDto> responseDtoList = accountHistoryMapper.TodtoList(all);
        return ResponseEntity.ok(responseDtoList);
    }

}
