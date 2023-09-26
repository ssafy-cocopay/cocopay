package com.bank.card.service;

import com.bank.account.service.AccountService;
import com.bank.benefit.dto.BenefitInfoResponseDto;
import com.bank.benefit.dto.BenefitResponseDto;
import com.bank.benefit.entity.Benefit;
import com.bank.benefit.entity.UserCardBenefit;
import com.bank.benefit.repository.BenefitRepository;
import com.bank.benefit.repository.UserCardBenefitRepository;
import com.bank.card.dto.*;
import com.bank.card.entity.Card;
import com.bank.card.entity.UserCard;
import com.bank.card.repository.card.CardRepository;
import com.bank.card.repository.usercard.UserCardRepository;
import com.bank.card_history.entity.CardHistory;
import com.bank.card_history.mapper.CardHistoryMapper;
import com.bank.card_history.repository.CardHistoryRepository;
import com.bank.performance.entity.Performance;
import com.bank.performance.repository.PerformanceRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserCardService {

    private final UserCardRepository userCardRepository;
    private final UserCardBenefitRepository userCardBenefitRepository;
    private final CardRepository cardRepository;
    private final BenefitRepository benefitRepository;
    private final AccountService accountService;
    private final CardHistoryRepository cardHistoryRepository;
    private final PerformanceRepository performanceRepository;
    private final CardHistoryMapper cardHistoryMapper;

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
    public UserCardDto getUserCard(String serialNumber, String cvc, String password) {
        UserCardDto userCard = userCardRepository.findUSerCardBySerialNumber(serialNumber, cvc, password);
        return userCard;
    }

    public List<UserCardDto> findUserCardByUuid(Integer uuid) {
        return userCardRepository.findUserCardListByUuid(uuid);
    }

    //결제 후 실적 확인
    public void PerformanceCheck(Integer UserCardId){
        UserCard userCard = userCardRepository.findById(UserCardId).get();
        Card card = cardRepository.findById(userCard.getCard().getId()).get();
        Performance performance = performanceRepository.findPerformance(null,card.getId(),userCard.getPerformanceLevel()).get(0);
        if (performance.getLevelPrice()>=userCard.getTotalPrice()){
            userCard.setPerformanceLevel(userCard.getPerformanceLevel()+1);
            userCardRepository.save(userCard);
        }
    }
}
