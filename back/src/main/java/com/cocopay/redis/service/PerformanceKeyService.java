package com.cocopay.redis.service;

import com.cocopay.payment.dto.res.CardOfferResponseDto;
import com.cocopay.payment.dto.res.PerformanceResponseDto;
import com.cocopay.payment.mapper.PaymentMapper;
import com.cocopay.redis.key.PerformanceKey;
import com.cocopay.redis.mapper.RedisMapper;
import com.cocopay.redis.repository.PerformanceKeyRepository;
import com.cocopay.usercard.entity.UserCard;
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

    private final PerformanceKeyRepository performanceKeyRepository;

    private final RedisMapper redisMapper;

    private final PaymentMapper paymentMapper;

    //사용자 카드 실적 정보 redis 저장
    public void performanceKeySave(List<PerformanceResponseDto> dtoList) {

        List<PerformanceKey> performanceKeyList = redisMapper.toPerformanceKeyList(dtoList);
        log.info("redis에 저장할 개수 : {}", performanceKeyList.size());
        performanceKeyRepository.saveAll(performanceKeyList);
    }

    //사용자 카드 실적 정보 redis 조회
    public PerformanceKey findPerformanceKey(String cardId) {
        Optional<PerformanceKey> findPerformance = performanceKeyRepository.findById(cardId);

        return findPerformance
                .orElseThrow(() -> new RuntimeException("해당 카드와 매칭되는 실적 정보 없음"));
    }

    //사용자 카드 우선순위와 실적 정보 매핑 진행
    //List<UserCard>로 변경해야함
    public List<CardOfferResponseDto> performanceKeyMapping(List<UserCard> findUserCardList) {
        log.info("실적 정보 + 사용자 카드 매핑 진행");
        List<CardOfferResponseDto> responseDtoList = new ArrayList<>();

        for (UserCard userCard : findUserCardList) {
            String userCardId = String.valueOf(userCard.getId());
            PerformanceKey findPerformanceKey = findPerformanceKey(userCardId);

            //조회 후 삭제
            performanceKeyRepository.deleteById(userCardId);

            CardOfferResponseDto responseDtoTest = paymentMapper.toResponseDto(findPerformanceKey, userCard);
            responseDtoList.add(responseDtoTest);
        }

        return responseDtoList;
    }
}
