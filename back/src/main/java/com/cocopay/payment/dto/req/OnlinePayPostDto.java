package com.cocopay.payment.dto.req;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class OnlinePayPostDto {
    private int userId;

    private String category;

    private String storeName;

    private int orderPrice;
}
