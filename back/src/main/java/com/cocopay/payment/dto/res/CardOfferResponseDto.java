package com.cocopay.payment.dto.res;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class CardOfferResponseDto {
    private int cardUuid;

    private String serialNumber;

    private String cardName;

    private Boolean visa;

    private Boolean master;

    private String cardDefaultImage;

    private String cardType;

    private int cardOrder;

    private int level;

    private int nextLevel;

    private int price;

    private int totalPrice;

    private boolean pastPerformance;
}
