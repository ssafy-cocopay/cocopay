package com.cocopay.payment.dto.req;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class FinalPayReqDto {
    private int userId;
    private int cardId;
    private int finalPrice;
    //일시불, 할부
    private String transactionType;

    private Integer installmentMonth;
}