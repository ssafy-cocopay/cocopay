package com.cocopay.redis.service;

import com.cocopay.payment.dto.req.OnlinePayPostDto;
import com.cocopay.redis.key.OrderKey;
import com.cocopay.redis.mapper.RedisMapper;
import com.cocopay.redis.repository.OrderKeyRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class OrderKeyService {

    private final OrderKeyRepository orderKeyRepository;
    private final RedisMapper redisMapper;

    public void orderKeySave(OnlinePayPostDto dto) {
        OrderKey orderKey = redisMapper.toOrderKey(dto);
        orderKeyRepository.save(orderKey);
    }
}
