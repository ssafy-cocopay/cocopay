package com.cocopay.payment.apicall.dto.req;

import com.cocopay.payment.apicall.dto.res.BenefitResDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BenefitResDtoList {
    private List<BenefitResDto> benefitList;
}