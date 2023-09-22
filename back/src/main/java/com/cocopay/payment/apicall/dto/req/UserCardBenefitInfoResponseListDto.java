package com.cocopay.payment.apicall.dto.req;

import com.cocopay.payment.apicall.dto.res.UserCardBenefitInfoResponseDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserCardBenefitInfoResponseListDto {
    private List<UserCardBenefitInfoResponseDto> benefitList;
}