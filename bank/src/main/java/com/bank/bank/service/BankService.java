package com.bank.bank.service;

import com.bank.bank.entity.Bank;
import com.bank.bank.repository.BankRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BankService {
    private final BankRepository bankRepository;

    public Bank findBank(Integer bankId)
    {
        Optional<Bank> findBank = bankRepository.findById(bankId);

        return findBank.orElseThrow(() -> new RuntimeException("은행 조회 결과 없음"));
    }

}
