package com.cocopay.payment.apicall;

import com.cocopay.usercard.entity.UserCard;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.MediaType;
import org.springframework.http.client.MultipartBodyBuilder;
import org.springframework.stereotype.Service;
import org.springframework.util.MultiValueMap;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ApiCallService {

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
