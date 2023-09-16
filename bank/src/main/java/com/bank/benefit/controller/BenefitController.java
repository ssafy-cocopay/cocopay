package com.bank.benefit.controller;

import com.bank.benefit.entity.Benefit;
import com.bank.benefit.mapper.BenefitMapper;
import com.bank.benefit.service.BenefitService;
import com.bank.benefit.service.UserCardBenefitService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
@RequestMapping("/bank/benefit")
@RequiredArgsConstructor
public class BenefitController {
    private final BenefitService benefitService;
    private final UserCardBenefitService userCardBenefitService;
    private final BenefitMapper benefitMapper;

    //혜택 조회
    @GetMapping("/{card_uuid}")
    ResponseEntity<?> getBenefit(@PathVariable("card_uuid") Integer cardUuid) {
        List<Benefit> result = benefitService.getBenefitList(cardUuid);

        return ResponseEntity.ok(benefitMapper.toDtoList(result));
    }

    //특정 카드의 남은 혜택한도 조회
    @GetMapping("/discountAmount")
    ResponseEntity findDiscountAmount(@RequestParam("cardUuid") int cardUuid,
                                      @RequestParam("benefitId") int benefitId) {
        Integer discountAmount = userCardBenefitService.findDiscountAmount(cardUuid, benefitId);

        return ResponseEntity.ok(discountAmount);
    }


    //한도 조회
}
