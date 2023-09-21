package com.cocopay.redis.redishash.key;

import lombok.Data;
import org.springframework.data.redis.core.RedisHash;
import org.springframework.data.annotation.Id;

@Data
@RedisHash(value = "AuthKey")
public class AuthHash {
    @Id
    private String tel;
    private String code;

}
