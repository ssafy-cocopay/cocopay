package com.cocopay.payment.dto.res;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PayCompleteResDto {
    private String cardImage;
    private String cardName;
    private int discounted;
    private int remainingAmt;
    private String graphRate;
    private int nextPerLevel;

}
