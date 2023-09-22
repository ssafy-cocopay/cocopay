package com.cocopay.redis.repository;

import com.cocopay.redis.key.BenefitKey;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BenefitKeyRepository extends CrudRepository<BenefitKey,String> {
}
