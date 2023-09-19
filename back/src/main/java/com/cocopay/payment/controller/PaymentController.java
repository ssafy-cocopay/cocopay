package com.cocopay.payment.controller;

import com.cocopay.payment.dto.req.OnlinePayPostDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
@RequestMapping("/api/pay")
public class PaymentController {

    @PostMapping("/online")
    public ResponseEntity onlinePay(@RequestBody OnlinePayPostDto onlinePayPostDto) {

        return null;
    }
}
