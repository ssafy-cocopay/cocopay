package com.cocopay.usercard.service;

import com.cocopay.user.entity.User;
import com.cocopay.user.repository.UserRepository;
import com.cocopay.usercard.dto.*;
import com.cocopay.usercard.entity.UserCard;
import com.cocopay.usercard.repository.UserCardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserCardService {
    private final UserCardRepository userCardRepository;
    private final UserRepository userRepository;
    //카드 등록
    public UserCard registUserCard(UserCardRegisterDto userCardRegisterDto, boolean cocopay) {
        WebClient webClient = WebClient.create();

        //api 주소
        String url = "http://localhost:8081/bank/card/search";

        //임시 동기 요청
        UserCardDto userCardDto = webClient.post()
                .uri(url)
                .contentType(MediaType.APPLICATION_JSON)
                .bodyValue(userCardRegisterDto)
                .retrieve()
                .bodyToMono(UserCardDto.class)
                .block();

        Optional<User> user = userRepository.findById(userCardRegisterDto.getUserId());
        System.out.println(userCardDto.getUserCardId());
        int count = userCardRepository.findUserCardListByCocoType(userCardRegisterDto.getUserId()).size()+1;
        UserCard userCard = UserCard.builder()
                .user(user.get())
                .cocoType(cocopay)
                .cardUuid(userCardDto.getUserCardId())
                .serialNumber(userCardDto.getSerialNumber())
                .cardOrder(count)
                .cardType(userCardDto.getCardType())
                .cardName(userCardDto.getCardName())
                .validDate(userCardDto.getValidDate())
                .visa(userCardDto.isVisa())
                .master(userCardDto.isMaster())
                .cardDefaultImage(userCardDto.getCardDefaulImage())
                .build();
        userCardRepository.save(userCard);
        return userCard;
    }

    //카드 목록 조회(코코페이 포함)
    public List<UserCard> findAllUserCardList(Integer userId){
        return userCardRepository.FindAllUserCard(userId);
    }

    //카드 목록 조회(코코페이 빼고, 목록에 들어갈 카드 목록)
    public List<UserCard> findUserCardList(Integer userId){
        return userCardRepository.findUserCardListByCocoType(userId);
    }

    //사용자 카드 삭제
    public void deleteUserCard(Integer cardId){
        Optional<UserCard> userCard = userCardRepository.findById(cardId);
        userCard.get().setWithdrawDate(LocalDateTime.now());
        userCardRepository.save(userCard.get());
    }

    //사용자별 통계
    public CategoryResponseDto getAllamount(FindHistoryByUserId findHistoryByUserId){
        WebClient webClient = WebClient.create();

        //api 주소
        String url = "http://localhost:8081/bank/card-history/total";

        //임시 동기 요청
        CategoryResponseDto categoryResponseDto = webClient.post()
                .uri(url)
                .contentType(MediaType.APPLICATION_JSON)
                .bodyValue(findHistoryByUserId)
                .retrieve()
                .bodyToMono(CategoryResponseDto.class)
                .block();


        return categoryResponseDto;
    }

    //카드 한달 이용내역
    public List<HistoryResponseDto> getCardHistory(HistoryFindDto historyFindDto){
        WebClient webClient = WebClient.create();

        //api 주소
        String url = "http://localhost:8081/bank/card-history";

        //임시 동기 요청
        List<HistoryResponseDto> cardHistoryList =  webClient.post()
                .uri(url)
                .contentType(MediaType.APPLICATION_JSON)
                .bodyValue(historyFindDto)
                .retrieve()
                .bodyToMono(List.class)
                .block();
        return cardHistoryList;
    }

}
