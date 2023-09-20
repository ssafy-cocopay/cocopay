package com.cocopay.user.repository;


import com.cocopay.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer>, UserRepositoryCustom {
}
