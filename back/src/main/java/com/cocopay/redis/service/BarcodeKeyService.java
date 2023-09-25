package com.cocopay.redis.service;

import com.cocopay.redis.key.BarcodeKey;
import com.cocopay.redis.mapper.RedisMapper;
import com.cocopay.redis.repository.BarcodeKeyRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class BarcodeKeyService {
    private final BarcodeKeyRepository barcodeKeyRepository;
    private final RedisMapper redisMapper;

    public void barcodeSave(int userId, int cardId, String barcodeNum) {
        BarcodeKey barcodeKey = redisMapper.toBarcodeKey(userId, cardId, barcodeNum);
        log.info("바코드 생성 후 저장");
        log.info("barcodeKey : {}", barcodeKey);
        barcodeKeyRepository.save(barcodeKey);
    }
}
