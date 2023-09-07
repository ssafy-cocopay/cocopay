package com.bank.card.repository.usercard;

import com.bank.card.entity.UserCard;

import java.util.List;
import java.util.Optional;

public interface UserCardRepositoryCustom {
    List<UserCard> findUserCardByUUID(Integer uuid);
}
