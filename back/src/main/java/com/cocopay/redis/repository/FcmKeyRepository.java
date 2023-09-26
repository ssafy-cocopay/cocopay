package com.cocopay.redis.repository;

import com.cocopay.redis.key.FCMHash;
import org.springframework.data.repository.CrudRepository;

public interface FcmKeyRepository extends CrudRepository<FCMHash, String> {
}
