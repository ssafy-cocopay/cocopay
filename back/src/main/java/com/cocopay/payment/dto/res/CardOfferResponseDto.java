package com.cocopay.payment.dto.res;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
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
    //실적 현재 금액
    private int price;
    //사용자 총 이용금액
    private int totalPrice;

    private boolean pastPerformance;

    //물건 주문 금액
    private int orderPrice;

    //할인이 적용된 최종 금액
    private int finalPrice;

    //할인 예정 금액
    private int discounted;
}
