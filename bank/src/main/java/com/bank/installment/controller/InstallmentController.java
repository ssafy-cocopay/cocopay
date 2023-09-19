package com.bank.installment.controller;

import com.bank.installment.dto.InstallmentFindDto;
import com.bank.installment.dto.InstallmentRegistDto;
import com.bank.installment.entity.Installment;
import com.bank.installment.service.InstallmentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    //할부 조회
    @GetMapping
    public ResponseEntity<List<Installment>> findInstallment(@RequestBody InstallmentFindDto installmentFindDto){
        List<Installment> installmentList = installmentService.findInstallment(installmentFindDto.getId(),installmentFindDto.getCardId());

        return ResponseEntity.ok(installmentList);
    }
}
