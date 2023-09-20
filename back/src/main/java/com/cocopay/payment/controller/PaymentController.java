package com.cocopay.payment.controller;

import com.cocopay.payment.dto.req.OnlinePayPostDto;
import com.cocopay.payment.service.PaymentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/api/pay")
public class PaymentController {
    private final PaymentService paymentService;

    @PostMapping("/online")
    public ResponseEntity onlinePay(@RequestBody OnlinePayPostDto onlinePayPostDto) {
        log.info("onlinePayPostDto : {}",onlinePayPostDto.getCardId());

        paymentService.onlinePay(onlinePayPostDto.getUserId(),
                onlinePayPostDto.getCardId(),
                onlinePayPostDto.getTotalPrice());
        return null;
    }
}
