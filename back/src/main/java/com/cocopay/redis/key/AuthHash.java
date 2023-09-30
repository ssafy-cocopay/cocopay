package com.cocopay.redis.key;

import lombok.Data;
import org.springframework.data.redis.core.RedisHash;
import org.springframework.data.annotation.Id;

@Data
@RedisHash(value = "AuthKey",timeToLive = 180)
public class AuthHash {
    @Id
    private String tel;
    private String code;

}
