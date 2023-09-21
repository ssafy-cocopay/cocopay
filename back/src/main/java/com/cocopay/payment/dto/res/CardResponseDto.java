package com.cocopay.payment.dto.res;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CardResponseDto {
    private int cardUuid;

    private String serialNumber;

    private String cardName;

    private Boolean visa;

    private Boolean master;

    private String cardDefaultImage;

    private int cardOrder;
}
