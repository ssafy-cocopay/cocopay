package com.cocopay.redis.key;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;
import org.springframework.data.redis.core.index.Indexed;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@RedisHash(value = "barcode")
public class BarcodeKey {
    @Id
    private int cardId;

    private Integer userId;

    @Indexed
    private String barcodeNum;
}
