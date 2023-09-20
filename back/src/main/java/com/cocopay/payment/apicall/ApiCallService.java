package com.cocopay.payment.apicall;

import com.cocopay.payment.dto.req.Test;
import com.cocopay.payment.dto.res.PerformanceResponseListDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ApiCallService {

    //해당 카드 실적 관련 정보 조회
    public PerformanceResponseListDto userCardPerformanceInfo(List<Integer> findUserCardList) {
        WebClient webClient = WebClient.create();
        Test test = new Test();
        test.setCardUuidList(findUserCardList);

        //api 주소
        String url = "http://localhost:8081/bank/performance/list";

        return webClient.post()
                .uri(url)
                .contentType(MediaType.APPLICATION_JSON)
                .bodyValue(test)
                .retrieve()
                .bodyToMono(PerformanceResponseListDto.class)
                .block();
    }
}
