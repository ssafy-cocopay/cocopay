package com.bank.card.controller;

import com.bank.card.service.UserCardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("/bank/card")
public class CardController {

    private final UserCardService userCardService;

    // 사용자 카드 목록 조회
    @GetMapping("/{uuid}")
    public ResponseEntity<?> getCardList(@PathVariable Integer uuid) {
        return ResponseEntity.ok(userCardService.getUserCardList(uuid));
    }
}
