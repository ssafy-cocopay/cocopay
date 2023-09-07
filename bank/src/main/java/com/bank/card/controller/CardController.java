package com.bank.card.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("/bank/card")
public class CardController {

    // 사용자 카드 목록 조회
    @GetMapping("/{uuid}")
    public ResponseEntity<?> getCardList() {
        return null;
    }
}
