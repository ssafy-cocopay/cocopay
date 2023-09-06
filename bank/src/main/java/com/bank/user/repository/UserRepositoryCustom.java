package com.bank.user.repository;

import com.bank.user.entity.User;

import java.util.Optional;

public interface UserRepositoryCustom {

    public Optional<User> findUser(Integer uuid, String tel);
}
