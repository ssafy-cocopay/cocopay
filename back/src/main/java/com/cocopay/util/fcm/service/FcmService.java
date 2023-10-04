package com.cocopay.util.fcm.service;

import com.cocopay.exception.dto.CustomException;
import com.cocopay.exception.dto.ErrorCode;
import com.cocopay.redis.repository.FcmKeyRepository;
import com.cocopay.util.fcm.dto.FCMMessageDto;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.auth.oauth2.GoogleCredentials;
import lombok.RequiredArgsConstructor;
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
@RequiredArgsConstructor
public class FcmService {
    private final ObjectMapper objectMapper;
    private final FcmKeyRepository fcmKeyRepository;


    private String getAccessToken() throws IOException {
        // firebase로 부터 access token을 가져온다.
        String FIREBASE_CONFIG_PATH = "ssuk-ssuk-push-server-firebase-adminsdk-cue54-4b189a9f26.json";

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
    public void sendMessageTo(int userId, String title, String body, String name, String desc) throws IOException {

//        String targetToken = fcmKeyRepository.findById(String.valueOf(userId))
//                .orElseThrow(() -> new CustomException(ErrorCode.FCMTOKEN_NOT_FOUND))
//                .getFcmToken();
        String targetToken = "c8Ga8_FXxfSxmGEnnbJfs5:APA91bHrPQ3sVtM4NubeAYE0eOkxle_9GwoJ_aIb1C_D-LwfJR2t2TpQkCkiwkIwOD9VQ64ZB2grweArndggWO7yLH7-Yvnl0rWQ8A6e8U4-pD4LHJmgVCgNVvdvzT8SrhRNF3aviA-M";
        log.info("FCM TOKEN : " + targetToken);

        String message = makeMessage(targetToken, title, body, name, desc);

        OkHttpClient client = new OkHttpClient();
        RequestBody requestBody = RequestBody.create(message, MediaType.get("application/json; charset=utf-8"));

        String FIREBASE_ALARM_SEND_API_URI = "https://fcm.googleapis.com/v1/projects/ssuk-ssuk-push-server/messages:send";

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
