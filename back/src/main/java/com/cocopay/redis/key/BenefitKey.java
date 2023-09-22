package com.cocopay.redis.key;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@RedisHash(value = "benefitInfo")
public class BenefitKey {
    @Id
    String cardUuid;

    //할인율 ex) 2% 5% 10%...
    private Integer discount;

    //혜택 한도
    private Integer limit;

    //혜택 남은 금액
    private int discountAmount;

    //혜택pk
    private Integer benefitId;
}
