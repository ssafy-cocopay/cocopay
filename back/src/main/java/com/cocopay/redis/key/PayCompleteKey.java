package com.cocopay.redis.key;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@RedisHash(value = "PayComplete")
public class PayCompleteKey {
    @Id
    private int userId;
    private String cardImage;
    private String cardName;
    private int discounted;
    private int remainingAmt;
    private String graphRate;
    private int nextPerLevel;
}
