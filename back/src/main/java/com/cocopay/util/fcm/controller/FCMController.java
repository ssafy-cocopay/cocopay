package com.cocopay.util.fcm.controller;

import com.cocopay.util.fcm.service.FcmService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/fcm")
public class FCMController {
    private final FcmService fcmService;

    @GetMapping("/test/{userId}")
    public ResponseEntity<?> fcmTest(@PathVariable Integer userId) throws IOException {
        fcmService.sendMessageTo(userId,"tt","tt","tt","tt");
        return null;
    }
}
