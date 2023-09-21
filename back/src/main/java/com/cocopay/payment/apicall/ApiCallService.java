package com.cocopay.payment.apicall;

import com.cocopay.payment.dto.req.CardUuidListDto;
import com.cocopay.payment.dto.res.PerformanceResponseListDto;
import com.cocopay.usercard.entity.UserCard;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.ArrayList;
import java.util.List;

@Service
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
}
