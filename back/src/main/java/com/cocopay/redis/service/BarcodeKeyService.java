package com.cocopay.redis.service;

import com.cocopay.exception.dto.CustomException;
import com.cocopay.exception.dto.ErrorCode;
import com.cocopay.redis.key.BarcodeKey;
import com.cocopay.redis.mapper.RedisMapper;
import com.cocopay.redis.repository.BarcodeKeyRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Slf4j
@RequiredArgsConstructor
public class BarcodeKeyService {
    private final BarcodeKeyRepository barcodeKeyRepository;
    private final RedisMapper redisMapper;

    public void barcodeSave(int userId, int cardId, String barcodeNum) {
        BarcodeKey barcodeKey = redisMapper.toBarcodeKey(userId, cardId, barcodeNum);
        barcodeKeyRepository.save(barcodeKey);
    }

    public BarcodeKey findBarcode(int userId) {
        Optional<BarcodeKey> findBarcode = barcodeKeyRepository.findById(userId);

        return findBarcode
                .orElseThrow(() -> new CustomException(ErrorCode.DATA_NOT_FOUND));
    }

    public int findCardId(String barcodeNum) {
        return findByBarcode(barcodeNum).getCardId();
    }

    public BarcodeKey findByBarcode(String barcodeNum) {
        Optional<BarcodeKey> findBarcode = barcodeKeyRepository.findByBarcodeNum(barcodeNum);

        return findBarcode
                .orElseThrow(() -> new CustomException(ErrorCode.DATA_NOT_FOUND));
    }
}
