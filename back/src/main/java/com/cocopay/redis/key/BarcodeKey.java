package com.cocopay.redis.key;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@RedisHash(value = "barcode")
public class BarcodeKey {
    @Id
    private Integer userId;

    private int cardId;

    private String barcodeNum;
}
