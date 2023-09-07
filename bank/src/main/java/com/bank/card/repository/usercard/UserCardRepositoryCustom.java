package com.bank.card.repository.usercard;

import com.bank.card.entity.UserCard;

import java.util.Optional;

public interface UserCardRepositoryCustom {
    Optional<UserCard> findUserCardByUUID(Integer uuid);
}
