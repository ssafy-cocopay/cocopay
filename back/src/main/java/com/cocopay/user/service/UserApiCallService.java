package com.cocopay.user.service;

import com.cocopay.user.dto.request.UserFindRequestDto;
import com.cocopay.user.dto.response.UserCardResponseListDto;
import com.cocopay.user.dto.response.UserFindResponseDto;
import com.cocopay.user.entity.User;
import com.cocopay.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
@RequiredArgsConstructor
public class UserApiCallService {

    private final UserRepository userRepository;

    @Value("${bank.local-url}")
    private String localUrl;

    @Value("${bank.url}")
    private String url;

    public UserCardResponseListDto getUserCardFromBank(Integer userId)
    {
        User findUser = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("유저 찾을수없음"));
        Integer uuid = findUser.getUuid();

        WebClient webClient = WebClient.create();

        return webClient.get()
                .uri(localUrl + "card/card-list/" + uuid)
                .retrieve()
                .bodyToMono(UserCardResponseListDto.class)
                .block();
    }

    public UserFindResponseDto getUserUuid(UserFindRequestDto userFindRequestDto)
    {
        WebClient webClient = WebClient.create();

        return webClient.post()
                .uri(localUrl + "user").contentType(MediaType.APPLICATION_JSON)
                .bodyValue(userFindRequestDto)
                .retrieve()
                .bodyToMono(UserFindResponseDto.class)
                .block();
    }
}
