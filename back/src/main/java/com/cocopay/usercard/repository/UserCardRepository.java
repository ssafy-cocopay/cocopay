package com.cocopay.usercard.repository;


import com.cocopay.usercard.entity.UserCard;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserCardRepository extends JpaRepository<UserCard, Integer>,UserCardRepositoryCustom {
}
