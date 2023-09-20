package com.cocopay.redis.redishash.service;

import com.cocopay.payment.dto.res.PerformanceResponseDto;
import com.cocopay.redis.redishash.key.PerformanceHash;
import com.cocopay.redis.redishash.repository.PerformanceHashRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class PerformanceKeyService {

    private final PerformanceHashRepository performanceHashRepository;

    public void test(PerformanceResponseDto dto) {
        PerformanceHash performanceHash = new PerformanceHash();
        performanceHash.setCardUuid(String.valueOf(dto.getCardUuid()));
        performanceHash.setPrice(dto.getPrice());
        performanceHash.setPastPerformance(dto.isPastPerformance());
        performanceHash.setLevel(dto.getLevel());
        performanceHash.setNextLevel(dto.getNextLevel());
        performanceHash.setTotalPrice(dto.getTotalPrice());

        performanceHashRepository.save(performanceHash);
//        List<PerformanceHash> performanceHashes = new ArrayList<>();
//        performanceHashRepository.saveAll(performanceHashes);
    }
}
