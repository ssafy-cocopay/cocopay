package com.cocopay.redis.key;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

@Data
@RedisHash(value = "OrderKey")
public class OrderKey {
    @Id
    private String userId;

    private String category;

    private String storeName;

    private int OrderPrice;
}
