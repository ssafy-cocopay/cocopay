package com.bank.card_history.service;

import com.bank.card.entity.UserCard;
import com.bank.card.repository.usercard.UserCardRepository;
import com.bank.card_history.dto.*;
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
        TotalByMonth totalByMonth = cardHistoryRepository.getTotalByMonth(userCardIdList, findHistoryByUserId.getMonth());

        List<CategoryDto> categoryDtoList = cardHistoryRepository.getCardHistoryByCategory(userCardIdList,totalByMonth.getTotalPayByMonth(), totalByMonth.getTotalDiscountByMonth(), findHistoryByUserId.getMonth());

        for (CategoryDto categoryDto:categoryDtoList) {

            categoryDto.setPricePercent(String.format("%.1f",categoryDto.getPrice()/totalByMonth.getTotalPayByMonth()*100));
            categoryDto.setDiscountPercent(String.format("%.1f",categoryDto.getDiscountAmount()/totalByMonth.getTotalDiscountByMonth()*100));
        }


        CategoryResponseDto categoryResponseDto = CategoryResponseDto.builder()
                .categoryList(categoryDtoList)
                .allPrice(totalByMonth.getTotalPayByMonth())
                .allDiscountAmount(totalByMonth.getTotalDiscountByMonth())
                .build();

        return categoryResponseDto;

    }

    public TotalByMonth getTotalByMonth(List<Integer> cardUuidList, int month) {
        return cardHistoryRepository.getTotalByMonth(cardUuidList, month);
    }
}
