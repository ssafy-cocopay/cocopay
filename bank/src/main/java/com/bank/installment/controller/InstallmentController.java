package com.bank.installment.controller;

import com.bank.installment.dto.InstallmentRegistDto;
import com.bank.installment.service.InstallmentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/bank/installment")
public class InstallmentController {

    private final InstallmentService installmentService;

    //할부 생성
    @PostMapping("/regist")
    public ResponseEntity registInstallment(@RequestBody InstallmentRegistDto installmentRegistDto){
        installmentService.resistInstallment(installmentRegistDto);
        return ResponseEntity.ok("할부 등록 완료");
    }
}
