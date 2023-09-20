package com.cocopay.payment.dto.res;

import lombok.*;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class CardOfferResponseDto {
    private int cardUuid;

    private String serialNumber;

    private String cardName;

    private Boolean visa;

    private Boolean master;

    private String cardDefaultImage;

    private int level;

    private Integer nextLevel;

    private Integer price;

    private Integer totalPrice;

    private int cardOrder;

    private Integer orderPrice;
}
