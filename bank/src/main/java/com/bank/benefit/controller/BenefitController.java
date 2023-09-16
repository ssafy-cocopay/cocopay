package com.bank.benefit.controller;

import com.bank.benefit.entity.Benefit;
import com.bank.benefit.mapper.BenefitMapper;
import com.bank.benefit.service.BenefitService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/bank/benefit")
@RequiredArgsConstructor
public class BenefitController {
    private final BenefitService benefitService;
    private final BenefitMapper benefitMapper;

    //혜택 조회
    @GetMapping("/{card_uuid}")
    ResponseEntity<?> getBenefit(@PathVariable ("card_uuid") Integer cardUuid) {
        List<Benefit> result = benefitService.getBenefitList(cardUuid);

        return ResponseEntity.ok(benefitMapper.toDtoList(result));
    }

    //한도 조회
}
