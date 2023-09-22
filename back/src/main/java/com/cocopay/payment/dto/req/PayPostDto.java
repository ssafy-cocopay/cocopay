package com.cocopay.payment.dto.req;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class PayPostDto {
    private int userId;

    private Integer cardId;

    private String category;

    private String storeName;

    private int orderPrice;
}
