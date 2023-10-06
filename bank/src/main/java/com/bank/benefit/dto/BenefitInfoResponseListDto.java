package com.bank.benefit.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class BenefitInfoResponseListDto {
    private List<BenefitInfoResponseDto> benefitList;
}
