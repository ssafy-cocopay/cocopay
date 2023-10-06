package com.cocopay.payment.apicall;

import com.cocopay.payment.apicall.dto.req.BenefitResDtoList;
import com.cocopay.payment.apicall.dto.req.PaymentReqDto;
import com.cocopay.payment.apicall.dto.req.UserCardBenefitBodyDto;
import com.cocopay.payment.apicall.dto.res.BenefitResDto;
import com.cocopay.payment.dto.req.CardUuidListDto;
import com.cocopay.payment.dto.res.PerformanceResListDto;
import com.cocopay.payment.mapper.PaymentMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

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
    //테스트 이 후 제거 예정
    public PerformanceResListDto userCardPerformanceApiCall(CardUuidListDto cardUuidList) {
        WebClient webClient = WebClient.create();

        return webClient.post()
                .uri(localUrl + "performance/list")
                .contentType(MediaType.APPLICATION_JSON)
                .bodyValue(cardUuidList)
                .retrieve()
                .bodyToMono(PerformanceResListDto.class)
                .block();
    }

    //결제요청 api 콜 진행
    public Integer payApiCall(PaymentReqDto requestDto) {
        log.info("requestDto : {}", requestDto);
        WebClient webClient = WebClient.create();

        log.info("결제 요청 api call 진행");
        Integer response = webClient.post()
                .uri(localUrl + "card/pay")
                .contentType(MediaType.APPLICATION_JSON)
                .bodyValue(requestDto)
                .retrieve()
                .bodyToMono(Integer.class)
                .block();
        log.info("결제 요청 api call 종료");
        log.info("reponse : {}", response);
        return response;
    }

    //특정 카드의 혜택을 조회하는 api 콜 진행
    public List<BenefitResDto> userCardBenefitApiCall(UserCardBenefitBodyDto bodyDto) {
        WebClient webClient = WebClient.create();

        BenefitResDtoList response = webClient.post()
                .uri(localUrl + "benefit/list")
                .contentType(MediaType.APPLICATION_JSON)
                .bodyValue(bodyDto)
                .retrieve()
                .bodyToMono(BenefitResDtoList.class)
                .block();

        return response.getBenefitList();
    }

    //카드 이용 내역 pk로 할인 받은 금액 조회
    public Integer findDiscounted(int cardHistoryId) {
        WebClient webClient = WebClient.create();

        return webClient.get()
                .uri(localUrl + "card-history/" + cardHistoryId)
                .retrieve()
                .bodyToMono(Integer.class)
                .block();
    }
}
