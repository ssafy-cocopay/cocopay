package com.cocopay.payment.dto.req;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Builder
public class PayPostDto {
    private int userId;

    private int cardId;

    private String category;

    private String storeName;

    private int orderPrice;

    private String transactionType;

    private Integer installmentMonth;
}
