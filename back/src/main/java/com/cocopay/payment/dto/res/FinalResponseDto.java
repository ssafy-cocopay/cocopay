package com.cocopay.payment.dto.res;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FinalResponseDto {
    private String cardName;

    private int discountAmount;

    private int performance;
}
