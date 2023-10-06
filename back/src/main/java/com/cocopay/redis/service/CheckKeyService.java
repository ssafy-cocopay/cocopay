package com.cocopay.redis.service;

import com.cocopay.redis.key.CheckKey;
import com.cocopay.redis.mapper.RedisMapper;
import com.cocopay.redis.repository.CheckKeyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CheckKeyService {

    private final CheckKeyRepository checkKeyRepository;
    private final RedisMapper redisMapper;

    //저장
    public void checkSave(int userId) {
        CheckKey checkKey = redisMapper.toCheckKey(String.valueOf(userId));
        checkKeyRepository.save(checkKey);
    }

    //조회
    public String findCheck(int userId) {
        Optional<CheckKey> findCheck = checkKeyRepository.findById(String.valueOf(userId));

        //존재하면 온라인 결제 완료
        if (findCheck.isPresent()) {
            return "있음";
        }
        else return "없음";
    }

    //삭제
    public void deleteCheck(int userId) {
        checkKeyRepository.deleteById(String.valueOf(userId));
    }
}
