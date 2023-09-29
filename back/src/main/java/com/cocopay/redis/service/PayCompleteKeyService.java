package com.cocopay.redis.service;

import com.cocopay.exception.dto.CustomException;
import com.cocopay.exception.dto.ErrorCode;
import com.cocopay.redis.key.PayCompleteKey;
import com.cocopay.redis.repository.PayCompleteKeyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PayCompleteKeyService {
    private final PayCompleteKeyRepository payCompleteKeyRepository;

    //생색내기 페이지 데이터 저장
    public void completeSave(PayCompleteKey payCompleteKey) {
        payCompleteKeyRepository.save(payCompleteKey);
    }

    //생색내기 페이지 데이터 조회
    public PayCompleteKey findComplete(int userId) {
        Optional<PayCompleteKey> find = payCompleteKeyRepository.findById(userId);

        return find
                .orElseThrow(() -> new CustomException(ErrorCode.DATA_NOT_FOUND));
    }
}
