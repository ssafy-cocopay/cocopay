package com.cocopay.usercard.repository;


import com.cocopay.usercard.entity.UserCard;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserCardRepository extends JpaRepository<UserCard, Integer>,UserCardRepositoryCustom {
    @Override
    Optional<UserCard> findById(Integer id);
}
