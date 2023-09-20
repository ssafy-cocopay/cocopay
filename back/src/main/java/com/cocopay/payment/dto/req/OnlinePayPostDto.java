package com.cocopay.payment.dto.req;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
public class OnlinePayPostDto {
    private int userId;

    private int cardId;

    private List<OrderPostDto> orderPostDtoList;

    private int totalPrice;
}
