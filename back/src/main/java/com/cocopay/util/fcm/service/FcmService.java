package com.cocopay.util.fcm.service;

import com.cocopay.util.fcm.dto.FCMMessageDto;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.auth.oauth2.GoogleCredentials;
import lombok.extern.slf4j.Slf4j;
import okhttp3.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Arrays;

@Service
@Slf4j
public class FcmService {

    private static final String FIREBASE_CONFIG_PATH = "resources/google-services.json";
    private static final String FIREBASE_ALARM_SEND_API_URI = "https://fcm.googleapis.com/v1/projects/ssuk-ssuk-push-server/messages:send";
    private final ObjectMapper objectMapper;

    @Autowired
    public FcmService(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    private String getAccessToken() throws IOException {
        // firebase로 부터 access token을 가져온다.

        GoogleCredentials googleCredentials = GoogleCredentials
                .fromStream(new ClassPathResource(FIREBASE_CONFIG_PATH).getInputStream())
                .createScoped(Arrays.asList("https://www.googleapis.com/auth/cloud-platform"));

        googleCredentials.refreshIfExpired();

        return googleCredentials.getAccessToken().getTokenValue();

    }

    // title : 알림 제목 
    // body : 알림내용
    // targetToken : firebase token
    // 알림 파라미터들을 FCM이 요구하는 형태로 가공
    public String makeMessage(
            String targetToken, String title, String body, String name, String description
    ) throws JsonProcessingException {

        FCMMessageDto fcmMessage = FCMMessageDto.builder()
                .message(
                        FCMMessageDto.Message.builder()
                                .token(targetToken)
                                .notification(
                                        FCMMessageDto.Notification.builder()
                                                .title(title)
                                                .body(body)
                                                .build()
                                )
                                .data(
                                        FCMMessageDto.Data.builder()
                                                .name(name)
                                                .description(description)
                                                .build()
                                )
                                .build()
                )
                .validateOnly(false)
                .build();

        return objectMapper.writeValueAsString(fcmMessage);

    }

    //targetToken : 푸쉬 알림을 받을 클라이언트 앱의 식별 토큰
    public void sendMessageTo(
            String targetToken, String title, String body, String id, String isEnd
    ) throws IOException {

        String message = makeMessage(targetToken, title, body, id, isEnd);

        OkHttpClient client = new OkHttpClient();
        RequestBody requestBody = RequestBody.create(message, MediaType.get("application/json; charset=utf-8"));

        Request request = new Request.Builder()
                .url(FIREBASE_ALARM_SEND_API_URI)
                .post(requestBody)
                .addHeader(HttpHeaders.AUTHORIZATION, "Bearer " + getAccessToken())
                .addHeader(HttpHeaders.CONTENT_TYPE, "application/json; UTF-8")
                .build();

        Response response = client.newCall(request).execute();

        log.info(response.body().string());
    }

}
