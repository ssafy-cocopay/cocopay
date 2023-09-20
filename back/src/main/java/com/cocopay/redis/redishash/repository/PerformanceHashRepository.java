package com.cocopay.redis.redishash.repository;

import com.cocopay.redis.redishash.key.PerformanceHash;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PerformanceHashRepository extends CrudRepository<PerformanceHash, String> {
}
