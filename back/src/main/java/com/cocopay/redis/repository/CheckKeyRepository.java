package com.cocopay.redis.repository;

import com.cocopay.redis.key.CheckKey;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CheckKeyRepository extends CrudRepository<CheckKey,String> {
}
