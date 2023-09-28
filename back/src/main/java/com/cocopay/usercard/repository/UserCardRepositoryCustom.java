package com.cocopay.usercard.repository;

import com.cocopay.usercard.entity.UserCard;
import org.jetbrains.annotations.Nullable;

import java.util.List;
import java.util.Optional;

public interface UserCardRepositoryCustom {

    List<UserCard> findUserCardListByCocoType(int userId);

    List<UserCard> FindAllUserCard(int userId);

    Optional<UserCard> findUserCardByUuid(int cardUuid);

    Optional<UserCard> findByUserCardId(int userCardId);
}
