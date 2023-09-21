package com.cocopay.redis.key;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

@Data
@RedisHash(value = "PerformanceKey")
public class PerformanceKey {
    @Id
    private String cardUuid;

    private int level;

    private int nextLevel;

    private int price;

    private int totalPrice;

    private boolean pastPerformance;
}
