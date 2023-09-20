package com.cocopay.redis.repository;

import com.cocopay.redis.key.PerformanceKey;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PerformanceKeyRepository extends CrudRepository<PerformanceKey, String> {
}
