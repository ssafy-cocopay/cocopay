package com.cocopay.redis.service;

import com.cocopay.redis.key.FCMHash;
import com.cocopay.redis.repository.FcmKeyRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class FcmKeyService {
    private final FcmKeyRepository fcmKeyRepository;

    public void saveFcmKey(String userId, String fcmToken)
    {
        FCMHash fcmHash = new FCMHash();
        fcmHash.setUserId(userId);
        fcmHash.setFcmToken(fcmToken);

        fcmKeyRepository.save(fcmHash);
    }

}
