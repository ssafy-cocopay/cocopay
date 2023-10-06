package com.cocopay.redis.key;

import org.springframework.data.annotation.Id;
import lombok.Data;
import org.springframework.data.redis.core.RedisHash;

@Data
@RedisHash(value = "FcmKey")
public class FCMHash {
    @Id
    private String userId;
    private String fcmToken;
}
