package com.bank.bank.controller;

import com.bank.bank.entity.Bank;
import com.bank.bank.mapper.BankMapper;
import com.bank.bank.service.BankService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("/bank/bank")
public class BankController {

    private final BankService bankService;
    private final BankMapper bankMapper;

    @GetMapping("/{bank_id}")
    ResponseEntity<?> getBank(@PathVariable Integer bank_id) {
        Bank bank = bankService.findBank(bank_id);

        return ResponseEntity.ok(bankMapper.bankToResponseDto(bank));
    }
}
