package com.bank.card.repository.usercard;

import com.bank.card.entity.UserCard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserCardRepository extends JpaRepository<UserCard, Integer>, UserCardRepositoryCustom {

}
