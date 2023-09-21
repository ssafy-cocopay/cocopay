package com.cocopay.payment.dto.req;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PickDto {
    private int userId;

    private int cardUuid;

    private String transactionType;

    private int orderPrice;
}
