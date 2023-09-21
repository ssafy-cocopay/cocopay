package com.cocopay.redis.redishash.repository;

import com.cocopay.redis.redishash.key.AuthHash;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthHashRepository extends CrudRepository<AuthHash, String> {
}
