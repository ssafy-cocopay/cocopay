package com.cocopay.payment.apicall.dto.req;

import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class PaymentReqDto {
    private Integer cardUuid;
    private Integer requestPrice;
    private String category;
    private String store;
    private String transactionType;
    private Integer installmentMonth;
}