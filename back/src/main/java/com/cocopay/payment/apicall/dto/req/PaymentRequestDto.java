package com.cocopay.payment.apicall.dto.req;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PaymentRequestDto {
    private Integer cardUuid;
    private Integer benefitId;
    private Integer requestPrice;
    private String category;
    private String store;
    private String discountType;
    private String transactionType;
}