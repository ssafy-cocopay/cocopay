package com.cocopay.payment.service;

import com.cocopay.payment.dto.req.OnlinePayPostDto;
import com.cocopay.usercard.entity.UserCard;
import com.cocopay.usercard.repository.UserCardRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpEntity;
import org.springframework.http.MediaType;
import org.springframework.http.client.MultipartBodyBuilder;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class PaymentService {
    private final UserCardRepository userCardRepository;

    //온라인 결제
    public void onlinePay(int userId, int cardId, int totalPrice) {
        List<UserCard> findUserCardList = userCardRepository.findUserCardListByCocoType(userId);
    }

    //해당 카드 실적 관련 정보 조회
    public void userCardPerformanceInfo(List<UserCard> findUserCardList) {
        WebClient webClient = WebClient.create();
        
        //api call 요청 보낼 body 만들기
        MultipartBodyBuilder builder = new MultipartBodyBuilder();
        builder.part("cardList",findUserCardList);

        MultiValueMap<String, HttpEntity<?>> body = builder.build();

        //api 주소
        String url = "";

        webClient.post()
                .contentType(MediaType.APPLICATION_JSON)
                .bodyValue(body);

    }
}
