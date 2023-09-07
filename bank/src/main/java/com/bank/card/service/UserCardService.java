package com.bank.card.service;

import com.bank.card.entity.UserCard;
import com.bank.card.repository.usercard.UserCardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserCardService {
    private final UserCardRepository userCardRepository;

    public UserCard getUserCardList(Integer uuid)
    {
        //Optional<UserCard> result = userCardRepository.findByUserId();
        return null;
    }
}
