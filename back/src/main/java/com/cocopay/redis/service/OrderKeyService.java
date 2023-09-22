package com.cocopay.redis.service;

import com.cocopay.redis.key.OrderKey;
import com.cocopay.redis.mapper.RedisMapper;
import com.cocopay.redis.repository.OrderKeyRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Slf4j
@RequiredArgsConstructor
public class OrderKeyService {

    private final OrderKeyRepository orderKeyRepository;
    private final RedisMapper redisMapper;

    //주문 정보 저장
    public void orderKeySave(int userId, String category, String storeName, int orderPrice) {
        OrderKey orderKey = redisMapper.toOrderKey(userId, category, storeName, orderPrice);
        orderKeyRepository.save(orderKey);
    }

    //주문 정보 조회
    public OrderKey findOrderKey(int userId) {
        log.info("userId : {}", userId);
        Optional<OrderKey> findOrderKey = orderKeyRepository.findById(String.valueOf(userId));

        return findOrderKey
                .orElseThrow(() -> new RuntimeException("주문 정보 조회 결과 없음"));
    }
}
