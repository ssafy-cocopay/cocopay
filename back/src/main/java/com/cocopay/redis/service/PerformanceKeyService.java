package com.cocopay.redis.service;

import com.cocopay.payment.dto.res.CardOfferResponseDto;
import com.cocopay.payment.dto.res.PerformanceResponseDto;
import com.cocopay.payment.mapper.PaymentMapper;
import com.cocopay.redis.key.PerformanceKey;
import com.cocopay.redis.mapper.RedisMapper;
import com.cocopay.redis.repository.PerformanceHashRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class PerformanceKeyService {

    private final PerformanceHashRepository performanceHashRepository;

    private final RedisMapper redisMapper;

    private final PaymentMapper paymentMapper;

    //사용자 카드 실적 정보 redis 저장
    public void performanceKeySave(List<PerformanceResponseDto> dtoList) {

        List<PerformanceKey> performanceKeyList = redisMapper.toPerformanceKeyList(dtoList);

        performanceHashRepository.saveAll(performanceKeyList);
    }

    //사용자 카드 실적 정보 redis 조회
    public PerformanceKey findPerformanceKey(String cardId) {
        Optional<PerformanceKey> findPerformance = performanceHashRepository.findById(cardId);

        return findPerformance
                .orElseThrow(() -> new RuntimeException("해당 카드와 매칭되는 실적 정보 없음"));
    }

    //사용자 카드 우선순위와 실적 정보 매핑 진행
    //List<Integer>는 임시이며
    //List<UserCard>로 변경해야함
    public List<CardOfferResponseDto> performanceKeyMapping(List<Integer> findUserCardList) {
        List<CardOfferResponseDto> responseDtoList = new ArrayList<>();

        for (Integer integer : findUserCardList) {
            PerformanceKey findPerformanceKey = findPerformanceKey(String.valueOf(integer));

            CardOfferResponseDto responseDtoTest = paymentMapper.toResponseDtoTest(findPerformanceKey, integer);
            responseDtoList.add(responseDtoTest);
        }

        return responseDtoList;
    }
}
