package com.cocopay.redis.key;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@RedisHash(value = "check")
public class CheckKey {
    @Id
    private String userId;
}
