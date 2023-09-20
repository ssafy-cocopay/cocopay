package com.bank.card.service;

import com.bank.card.dto.FindBySerialNumber;
import com.bank.card.dto.PerformanceResponseDto;
import com.bank.card.dto.UserCardDto;
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

    public void save(UserCard userCard) {
        userCardRepository.save(userCard);
    }

    public List<UserCard> getUserCardList(Integer uuid) {
        return userCardRepository.findUserCardByUUID(uuid);
    }

    public PerformanceResponseDto getUserCardPerformance(Integer cardUuid) {
        return userCardRepository.findUserCardPerformance(cardUuid)
                .orElseThrow(() -> new RuntimeException("일치하는 카드 아이디 없음"));
    }

    //카드 고유번호로 카드 조회
    public UserCardDto getUserCard(String serialNumber, String cvc, String password){
        UserCardDto userCard = userCardRepository.findUSerCardBySerialNumber(serialNumber,cvc,password);
        return userCard;
    }
}
