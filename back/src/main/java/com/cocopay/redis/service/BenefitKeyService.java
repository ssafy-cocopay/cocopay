package com.cocopay.redis.service;

import com.cocopay.payment.apicall.dto.res.UserCardBenefitInfoResponseDto;
import com.cocopay.redis.key.BenefitKey;
import com.cocopay.redis.mapper.RedisMapper;
import com.cocopay.redis.repository.BenefitKeyRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
@RequiredArgsConstructor
public class BenefitKeyService {
    private final RedisMapper redisMapper;
    private final BenefitKeyRepository benefitKeyRepository;

    //혜택 정보 저장
    public void benefitSave(List<UserCardBenefitInfoResponseDto> dtoList) {
        List<BenefitKey> benefitKeyList = redisMapper.toBenefitKeyList(dtoList);

        benefitKeyRepository.saveAll(benefitKeyList);
    }

    //혜택 정보 조회
    public Optional<BenefitKey> findBenefitKey(int cardUuid) {
        return benefitKeyRepository.findById(String.valueOf(cardUuid));
    }

}
