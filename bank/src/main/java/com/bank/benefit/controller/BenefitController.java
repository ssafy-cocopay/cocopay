package com.bank.benefit.controller;

import com.bank.benefit.dto.BenefitInfoResponseDto;
import com.bank.benefit.dto.UserCardBenefitInfoDto;
import com.bank.benefit.entity.Benefit;
import com.bank.benefit.mapper.BenefitMapper;
import com.bank.benefit.service.BenefitService;
import com.bank.benefit.service.UserCardBenefitService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/bank/benefit")
@Slf4j
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

    //사용자가 보유한 카드들의 특정 혜택 조회
    @GetMapping("/benefitlist")
    public ResponseEntity findBenefitList(@RequestBody UserCardBenefitInfoDto userCardBenefitInfoDto) {
        //카드 uuid -> 카드 id 조회
        List<BenefitInfoResponseDto> benefitList = benefitService.findBenefitList(userCardBenefitInfoDto.getCardUuidList(),
                                                                                    userCardBenefitInfoDto.getCategory(),
                                                                                    userCardBenefitInfoDto.getStoreName());

        return ResponseEntity.ok(benefitList);
    }

    //특정 카드의 남은 혜택한도 조회
    @GetMapping("/discountAmount")
    public ResponseEntity findDiscountAmount(@RequestParam("cardUuid") int cardUuid,
                                             @RequestParam("benefitId") int benefitId) {
        Integer discountAmount = userCardBenefitService.findDiscountAmount(cardUuid, benefitId);

        return ResponseEntity.ok(discountAmount);
    }


    //한도 조회
}
