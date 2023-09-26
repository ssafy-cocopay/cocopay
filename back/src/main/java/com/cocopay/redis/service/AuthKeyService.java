package com.cocopay.redis.service;

import com.cocopay.redis.redishash.key.AuthHash;
import com.cocopay.redis.repository.AuthHashRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class AuthKeyService {
    private final AuthHashRepository authHashRepository;

    public void saveAuthMessage(String tel, String code) {
        AuthHash authHash = new AuthHash();
        authHash.setTel(tel);
        authHash.setCode(code);
        authHashRepository.save(authHash);
    }
}
