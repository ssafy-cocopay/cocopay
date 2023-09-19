package com.cocopay.usercard.repository;

import com.cocopay.usercard.entity.UserCard;

import java.util.List;

public interface UserCardRepositoryCustom {

    public List<UserCard> findUserCardListByCocoType(int userId);
}