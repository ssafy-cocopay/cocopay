package com.bank.card_history.service;

import com.bank.card.entity.UserCard;
import com.bank.card.repository.usercard.UserCardRepository;
import com.bank.card_history.dto.*;
import com.bank.card_history.entity.CardHistory;
import com.bank.card_history.mapper.CardHistoryMapper;
import com.bank.card_history.repository.CardHistoryRepository;
import com.bank.exception.dto.CustomException;
import com.bank.exception.dto.ErrorCode;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CardHistoryService {

    private final CardHistoryRepository cardHistoryRepository;
    private final UserCardRepository userCardRepository;
    private final CardHistoryMapper cardHistoryMapper;

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

            categoryDto.setPricePercent(String.format("%.1f",(double)categoryDto.getPrice()/totalByMonth.getTotalPayByMonth()*100));
            categoryDto.setDiscountPercent(String.format("%.1f",(double)categoryDto.getDiscountAmount()/totalByMonth.getTotalDiscountByMonth()*100));
        }

        List<CategoryDto> sorted = categoryDtoList.stream()
                .sorted(Comparator.comparing(CategoryDto::getPrice).reversed())
                .toList();

        CategoryResponseDto categoryResponseDto = CategoryResponseDto.builder()
                .categoryList(sorted)
                .allPriceAmount(totalByMonth.getTotalPayByMonth())
                .allDiscountAmount(totalByMonth.getTotalDiscountByMonth())
                .build();

        return categoryResponseDto;
    }

    //통계 소비
    public CategoryPriceResponseDto getAllPrice(FindHistoryByUserId findHistoryByUserId){
        //1.사용자의 모든 카드 조회
        List<UserCard> userCardList = userCardRepository.findUserCardByUUID(findHistoryByUserId.getUserId());
        List<Integer> userCardIdList = new ArrayList<>();
        for (UserCard userCard : userCardList) {
            userCardIdList.add(userCard.getId());
        }

        //2.조회한 모든 카드들을 카테고리별로 조회
        TotalByMonth totalByMonth = cardHistoryRepository.getTotalByMonth(userCardIdList, findHistoryByUserId.getMonth());

        List<CategoryDto> categoryDtoList = cardHistoryRepository.getCardHistoryByCategory(userCardIdList,totalByMonth.getTotalPayByMonth(), totalByMonth.getTotalDiscountByMonth(), findHistoryByUserId.getMonth());

        List<CategoryPriceDto> categoryPriceDtoList = cardHistoryMapper.categotyTocategotPriceList(categoryDtoList);

        for (CategoryPriceDto categoryPriceDto :categoryPriceDtoList) {
            categoryPriceDto.setPricePercent(String.format("%.1f",(double)categoryPriceDto.getPrice()/totalByMonth.getTotalPayByMonth()*100));
        }

        List<CategoryPriceDto> sorted = categoryPriceDtoList.stream()
                .sorted(Comparator.comparing(CategoryPriceDto::getPrice).reversed())
                .toList();

        CategoryPriceResponseDto categoryPriceResponseDto = CategoryPriceResponseDto.builder()
                .categoryList(sorted)
                .allPriceAmount(totalByMonth.getTotalPayByMonth())
                .build();

        return categoryPriceResponseDto;
    }

    //통계 혜택
    public CategoryDiscountResponseDto getAllDiscount(FindHistoryByUserId findHistoryByUserId){
        //1.사용자의 모든 카드 조회
        List<UserCard> userCardList = userCardRepository.findUserCardByUUID(findHistoryByUserId.getUserId());
        List<Integer> userCardIdList = new ArrayList<>();
        for (UserCard userCard : userCardList) {
            userCardIdList.add(userCard.getId());
        }

        //2.조회한 모든 카드들을 카테고리별로 조회
        TotalByMonth totalByMonth = cardHistoryRepository.getTotalByMonth(userCardIdList, findHistoryByUserId.getMonth());

        List<CategoryDto> categoryDtoList = cardHistoryRepository.getCardHistoryByCategory(userCardIdList,totalByMonth.getTotalPayByMonth(), totalByMonth.getTotalDiscountByMonth(), findHistoryByUserId.getMonth());

        List<CategoryDiscountDto> categoryDiscountDtoList = cardHistoryMapper.categotyTocategotDiscountList(categoryDtoList);

        for (CategoryDiscountDto categoryDiscountDto :categoryDiscountDtoList) {
            categoryDiscountDto.setDiscountPercent(String.format("%.1f",(double)categoryDiscountDto.getDiscountAmount()/totalByMonth.getTotalDiscountByMonth()*100));
        }

        List<CategoryDiscountDto> sorted = categoryDiscountDtoList.stream()
                .sorted(Comparator.comparing(CategoryDiscountDto::getDiscountAmount).reversed())
                .toList();

        CategoryDiscountResponseDto categoryDiscountResponseDto = CategoryDiscountResponseDto.builder()
                .categoryList(sorted)
                .allDiscountAmount(totalByMonth.getTotalDiscountByMonth())
                .build();

        System.out.println(categoryDiscountResponseDto.getCategoryList().get(0).getDiscountAmount());

        return categoryDiscountResponseDto;
    }

    public TotalByMonth getTotalByMonth(List<Integer> cardUuidList, int month) {
        return cardHistoryRepository.getTotalByMonth(cardUuidList, month);
    }

    public CardHistory findCardHistoryById(int cardHistoryId) {
        Optional<CardHistory> findCardHistory = cardHistoryRepository.findById(cardHistoryId);

        return findCardHistory
                .orElseThrow(() -> new CustomException(ErrorCode.DATA_NOT_FOUND));
    }

    public int findDiscounted(CardHistory cardHistory) {
        return cardHistory.getDiscountAmount();
    }
}
