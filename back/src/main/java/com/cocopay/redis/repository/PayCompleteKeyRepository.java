package com.cocopay.redis.repository;

import com.cocopay.redis.key.PayCompleteKey;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PayCompleteKeyRepository extends CrudRepository<PayCompleteKey, Integer> {
}
