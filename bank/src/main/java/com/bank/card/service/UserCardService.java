package com.bank.card.service;

import com.bank.card.entity.UserCard;
import com.bank.card.repository.usercard.UserCardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserCardService {

    private final UserCardRepository userCardRepository;

    public void save(UserCard userCard)
    {
        userCardRepository.save(userCard);
    }

    public List<UserCard> getUserCardList(Integer uuid) {
        return userCardRepository.findUserCardByUUID(uuid);
    }
}
