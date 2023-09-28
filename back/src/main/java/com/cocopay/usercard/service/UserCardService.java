package com.cocopay.usercard.service;

import com.cocopay.exception.dto.CustomException;
import com.cocopay.exception.dto.ErrorCode;
import com.cocopay.payment.dto.req.CardUuidListDto;
import com.cocopay.payment.dto.res.PerformanceResDto;
import com.cocopay.payment.dto.res.PerformanceResListDto;
import com.cocopay.redis.service.BarcodeKeyService;
import com.cocopay.user.entity.User;
import com.cocopay.user.repository.UserRepository;
import com.cocopay.usercard.dto.*;
import com.cocopay.usercard.entity.UserCard;
import com.cocopay.usercard.repository.UserCardRepository;
import com.github.javafaker.Faker;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Optional;

@Service
@Slf4j
@RequiredArgsConstructor
public class UserCardService {
    private final UserCardRepository userCardRepository;
    private final UserRepository userRepository;
    private final BarcodeKeyService barcodeKeyService;

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


        Optional<UserCard> check = userCardRepository.findByUserCardId(userCardDto.getUserCardId());
        if (check.isPresent()) {
            throw new CustomException(ErrorCode.DUPLICATE_CARD);
        }

        Optional<User> user = userRepository.findById(userCardRegisterDto.getUserId());
        System.out.println(userCardDto.getUserCardId());
        int count = userCardRepository.findUserCardListByCocoType(userCardRegisterDto.getUserId()).size() + 1;
        String SerialNumber = userCardDto.getSerialNumber().substring(0, 4) + "-****-****-" + userCardDto.getSerialNumber().substring(15, 19);
        UserCard userCard = UserCard.builder()
                .user(user.get())
                .cocoType(cocopay)
                .cardUuid(userCardDto.getUserCardId())
                .serialNumber(SerialNumber)
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
    public List<UserCard> findAllUserCardList(Integer userId) {
        return userCardRepository.FindAllUserCard(userId);
    }

    //카드 목록 조회(코코페이 빼고, 목록에 들어갈 카드 목록)
    public List<UserCard> findUserCardList(Integer userId) {
        return userCardRepository.findUserCardListByCocoType(userId);
    }

    //사용자 카드 삭제
    public void deleteUserCard(Integer cardId) {
        Optional<UserCard> userCard = userCardRepository.findById(cardId);
        userCard.get().setWithdrawDate(LocalDateTime.now());
        userCardRepository.save(userCard.get());
    }

    //사용자별 통계
    public CategoryResponseDto getAllamount(FindHistoryByUserId findHistoryByUserId) {
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
    public List<HistoryResponseDto> getCardHistory(HistoryFindDto historyFindDto) {
        WebClient webClient = WebClient.create();

        //api 주소
        String url = "http://localhost:8081/bank/card-history";

        //임시 동기 요청
        List<HistoryResponseDto> cardHistoryList = webClient.post()
                .uri(url)
                .contentType(MediaType.APPLICATION_JSON)
                .bodyValue(historyFindDto)
                .retrieve()
                .bodyToMono(List.class)
                .block();
        return cardHistoryList;
    }

    //카드 정보 보내주기(카드 상세페이지 부분)
    public UserCardDetailResponseDto findUserCardDetail(Integer cardId) {

        UserCard userCard = userCardRepository.findById(cardId).get();
        WebClient webClient = WebClient.create();

        //api 주소
        String url = "http://localhost:8081/bank/performance/list";

        List<Integer> cardList = new ArrayList<>();
        cardList.add(cardId);
        CardUuidListDto cardUuidListDto = new CardUuidListDto();
        cardUuidListDto.setCardUuidList(cardList);

        //임시 동기 요청
        PerformanceResListDto performanceResListDto = webClient.post()
                .uri(url)
                .contentType(MediaType.APPLICATION_JSON)
                .bodyValue(cardUuidListDto)
                .retrieve()
                .bodyToMono(PerformanceResListDto.class)
                .block();

        PerformanceResDto performanceResDto = performanceResListDto.getPerformanceList().get(0);
        //남은 금액
        int price = performanceResDto.getPrice() - performanceResDto.getTotalPrice();
        //퍼센트
        int percent = performanceResDto.getTotalPrice() / performanceResDto.getPrice() * 100;

        UserCardDetailResponseDto userCardDetailResponseDto = UserCardDetailResponseDto.builder()
                .userCardId(cardId)
                .cardName(userCard.getCardName())
                .level(performanceResDto.getLevel())
                .nextLevel(performanceResDto.getNextLevel())
                .price(price)
                .percent(percent)
                .totalPrice(performanceResDto.getTotalPrice())
                .build();
        return userCardDetailResponseDto;

    }

    //카드 우선순위 변경
    public void setCardOrder(List<Integer> cardUuidList) {
        int order = 1;
        for (Integer cardId : cardUuidList) {
            UserCard userCard = userCardRepository.findById(cardId).get();
            userCard.setCardOrder(order);
            userCardRepository.save(userCard);
            order++;
        }
    }

    public UserCard findUserCardById(int cardId) {
        Optional<UserCard> findUserCard = userCardRepository.findById(cardId);

        return findUserCard
                .orElseThrow(() -> new RuntimeException("해당 카드 없음"));
    }

    public MainAmountDto getAmount(FindHistoryByUserId findHistoryByUserId) {
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
        MainAmountDto mainAmountDto = MainAmountDto.builder()
                .allPrice(categoryResponseDto.getAllPrice())
                .allDiscountAmount(categoryResponseDto.getAllDiscountAmount())
                .build();

        return mainAmountDto;
    }

    public String makeBarcode(int userId, int cardId) {
        Faker faker = new Faker(new Locale("ko"));

        String barcodeNum = faker.numerify("############");
        log.info("barcodeNum : {}", barcodeNum);
        barcodeKeyService.barcodeSave(userId, cardId, barcodeNum);

        return barcodeNum;
    }

    public UserCard findUserCardByUuid(int cardUuid) {
        Optional<UserCard> findUserCard = userCardRepository.findUserCardByUuid(cardUuid);

        return findUserCard
                .orElseThrow(() -> new CustomException(ErrorCode.DATA_NOT_FOUND));
    }


}
