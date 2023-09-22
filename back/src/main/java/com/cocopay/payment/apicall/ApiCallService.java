package com.cocopay.payment.apicall;

import com.cocopay.payment.apicall.dto.req.PaymentRequestDto;
import com.cocopay.payment.apicall.dto.req.UserCardBenefitBodyDto;
import com.cocopay.payment.apicall.dto.req.UserCardBenefitInfoResponseListDto;
import com.cocopay.payment.apicall.dto.res.UserCardBenefitInfoResponseDto;
import com.cocopay.payment.dto.req.CardUuidListDto;
import com.cocopay.payment.dto.res.PerformanceResListDto;
import com.cocopay.payment.mapper.PaymentMapper;
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
    private final PaymentMapper paymentMapper;

    @Value("${bank.local-url}")
    private String localUrl;

    @Value("${bank.url}")
    private String url;


    //해당 카드 실적 관련 정보 조회
    public PerformanceResListDto userCardPerformanceInfo(List<UserCard> findUserCardList) {
        WebClient webClient = WebClient.create();

        List<Integer> list = new ArrayList<>();
        for (UserCard userCard : findUserCardList) {
            list.add(userCard.getCardUuid());
        }

        CardUuidListDto cardUuidList = new CardUuidListDto(list);

        return webClient.post()
                .uri(localUrl + "performance/list")
                .contentType(MediaType.APPLICATION_JSON)
                .bodyValue(cardUuidList)
                .retrieve()
                .bodyToMono(PerformanceResListDto.class)
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

    //특정 카드의 혜택을 조회하는 api 콜 진행
    public List<UserCardBenefitInfoResponseDto> userCardBenefitApiCall(UserCardBenefitBodyDto bodyDto) {
        WebClient webClient = WebClient.create();

        UserCardBenefitInfoResponseListDto response = webClient.post()
                .uri(localUrl + "benefit/list")
                .contentType(MediaType.APPLICATION_JSON)
                .bodyValue(bodyDto)
                .retrieve()
                .bodyToMono(UserCardBenefitInfoResponseListDto.class)
                .block();

        return response.getBenefitList();
    }
}
