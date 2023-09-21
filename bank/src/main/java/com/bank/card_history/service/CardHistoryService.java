package com.bank.card_history.service;

import com.bank.card.entity.UserCard;
import com.bank.card.repository.usercard.UserCardRepository;
import com.bank.card_history.dto.CategoryDto;
import com.bank.card_history.dto.CategoryResponseDto;
import com.bank.card_history.dto.FindHistoryByUserId;
import com.bank.card_history.dto.HistoryFindDto;
import com.bank.card_history.entity.CardHistory;
import com.bank.card_history.repository.CardHistoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CardHistoryService {

    private final CardHistoryRepository cardHistoryRepository;
    private final UserCardRepository userCardRepository;

    public List<CardHistory> getCardHistory(HistoryFindDto historyFindDto) {
        return cardHistoryRepository.getCardHistory(historyFindDto);
    }

    public CategoryResponseDto getAllamount(FindHistoryByUserId findHistoryByUserId){
        //1.사용자의 모든 카드 조회
        List<UserCard> userCardList = userCardRepository.findUserCardByUUID(findHistoryByUserId.getUserId());
        List<Integer> userCardIdList = new ArrayList<>();
        for (UserCard userCard : userCardList) {
            userCardIdList.add(userCard.getId());
        }
        //2.조회한 모든 카드들을 카테고리별로 조회
        List<CategoryDto> categoryDtoList = cardHistoryRepository.getCardHistoryByCategory(userCardIdList,findHistoryByUserId.getStartDate(),findHistoryByUserId.getEndDate());
        int allDiscountAmount = 0;
        Long allPrice = 0L;
        for (CategoryDto categoryDto:categoryDtoList) {
            allPrice += categoryDto.getPrice();
            allDiscountAmount += categoryDto.getDiscountAmount();
        }
        CategoryResponseDto categoryResponseDto = CategoryResponseDto.builder()
                .categoryDtoList(categoryDtoList)
                .allPrice(allPrice)
                .allDiscountAmount(allDiscountAmount)
                .build();

        return categoryResponseDto;

    }
}
