package com.cocopay.payment.dto.req;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
//주문
public class OrderPostDto {
    private String category;

    private String storeName;

    private int price;
}
