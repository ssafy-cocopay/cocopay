package com.bank.user.repository;

import com.bank.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer>,UserRepositoryCustom {
}
