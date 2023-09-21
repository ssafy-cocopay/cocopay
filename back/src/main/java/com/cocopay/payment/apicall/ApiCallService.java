package com.cocopay.payment.apicall;

import com.cocopay.payment.apicall.dto.req.PaymentRequestDto;
import com.cocopay.payment.dto.req.CardUuidListDto;
import com.cocopay.payment.dto.req.PickDto;
import com.cocopay.payment.dto.res.PerformanceResponseListDto;
import com.cocopay.usercard.entity.UserCard;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class ApiCallService {

    @Value("${bank.local-url}")
    private String localUrl;

    @Value("${bank.url}")
    private String url;


    //해당 카드 실적 관련 정보 조회
    public PerformanceResponseListDto userCardPerformanceInfo(List<UserCard> findUserCardList) {
        WebClient webClient = WebClient.create();

        List<Integer> list = new ArrayList<>();
        for (UserCard userCard : findUserCardList) {
            list.add(userCard.getId());
        }

        CardUuidListDto cardUuidList = new CardUuidListDto(list);

        return webClient.post()
                .uri(localUrl + "performance/list")
                .contentType(MediaType.APPLICATION_JSON)
                .bodyValue(cardUuidList)
                .retrieve()
                .bodyToMono(PerformanceResponseListDto.class)
                .block();
    }

    //결제요청 api 콜 진행
    public void payApiCall(PaymentRequestDto requestDto) {
        WebClient webClient = WebClient.create();
        
        log.info("결제 요청 api call 진행");
        String reponse = webClient.post()
                .uri(localUrl + "card/pay")
                .contentType(MediaType.APPLICATION_JSON)
                .bodyValue(requestDto)
                .retrieve()
                .bodyToMono(String.class)
                .block();
        log.info("결제 요청 api call 종료");
        log.info("reponse : {}", reponse);
    }
}
