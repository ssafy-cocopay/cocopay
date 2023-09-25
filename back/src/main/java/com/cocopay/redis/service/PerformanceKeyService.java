package com.cocopay.redis.service;

import com.cocopay.payment.dto.res.PerformanceResDto;
import com.cocopay.redis.key.PerformanceKey;
import com.cocopay.redis.mapper.RedisMapper;
import com.cocopay.redis.repository.PerformanceKeyRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class PerformanceKeyService {

    private final PerformanceKeyRepository performanceKeyRepository;

    private final RedisMapper redisMapper;

    //사용자 카드 실적 정보 redis 저장
    public void performanceKeySave(List<PerformanceResDto> dtoList) {

        List<PerformanceKey> performanceKeyList = redisMapper.toPerformanceKeyList(dtoList);
        log.info("redis에 저장할 개수 : {}", performanceKeyList.size());
        performanceKeyRepository.saveAll(performanceKeyList);
    }

    //사용자 카드 실적 정보 redis 조회
    public PerformanceKey findPerformanceKey(int cardUuid) {
        Optional<PerformanceKey> findPerformance = performanceKeyRepository.findById(String.valueOf(cardUuid));

        return findPerformance
                .orElseThrow(() -> new RuntimeException("해당 카드와 매칭되는 실적 정보 없음"));
    }
}
