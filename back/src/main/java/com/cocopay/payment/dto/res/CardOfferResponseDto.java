package com.cocopay.payment.dto.res;

import com.cocopay.redis.key.PerformanceKey;
import lombok.*;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class CardOfferResponseDto {
    private CardResponseDto card;

    private PerformanceKey performance;

    private int orderPrice;
}
