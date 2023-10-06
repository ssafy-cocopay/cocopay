package com.cocopay.redis.repository;
import com.cocopay.redis.key.AuthHash;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthHashRepository extends CrudRepository<AuthHash, String> {
}
