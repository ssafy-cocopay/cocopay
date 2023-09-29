package com.cocopay.redis.service;

import com.cocopay.exception.dto.CustomException;
import com.cocopay.exception.dto.ErrorCode;
import com.cocopay.redis.key.PayCompleteKey;
import com.cocopay.redis.repository.PayCompleteKeyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PayCompleteKeyService {
    private final PayCompleteKeyRepository payCompleteKeyRepository;

    //생색내기 페이지 데이터 저장
    @CachePut(value = "completeCache",key = "#payCompleteKey.userId")
    public PayCompleteKey completeSave(PayCompleteKey payCompleteKey) {
        return payCompleteKeyRepository.save(payCompleteKey);
    }

    //생색내기 페이지 데이터 조회
    @Cacheable(value = "completeCache",key = "#userId")
    public PayCompleteKey findComplete(int userId) {
        Optional<PayCompleteKey> find = payCompleteKeyRepository.findById(userId);

        return find
                .orElseThrow(() -> new CustomException(ErrorCode.DATA_NOT_FOUND));
    }

    @CacheEvict(value = "completeCache", key = "#userId")
    public void deleteComplete(int userId) {
        payCompleteKeyRepository.deleteById(userId);
    }
}
