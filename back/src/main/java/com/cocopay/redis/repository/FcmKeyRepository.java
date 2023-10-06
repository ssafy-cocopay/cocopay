package com.cocopay.redis.repository;

import com.cocopay.redis.key.FCMHash;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FcmKeyRepository extends CrudRepository<FCMHash, String> {
}
