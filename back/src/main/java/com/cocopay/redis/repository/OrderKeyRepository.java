package com.cocopay.redis.repository;

import com.cocopay.redis.key.OrderKey;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderKeyRepository extends CrudRepository<OrderKey,String> {
}
