package com.bank.card.controller;

import com.bank.card.dto.UserCardRegisterDto;
import com.bank.card.entity.UserCard;
import com.bank.card.mapper.UserCardMapper;
import com.bank.card.service.UserCardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequiredArgsConstructor
@RequestMapping("/bank/card")
public class CardController {

    private final UserCardService userCardService;
    private final UserCardMapper userCardMapper;

    //사용자 카드 등록
    @PostMapping("")
    public ResponseEntity<?> registerCard(@RequestBody UserCardRegisterDto userCardRegisterDto)
    {
        UserCard userCard = userCardMapper.RegisterDtoToUserCard(userCardRegisterDto);

        userCardService.save(userCard);
        return ResponseEntity.ok("사용자 카드 등록 완료");
    }

    // 사용자 카드 목록 조회
    @GetMapping("/{uuid}")
    public ResponseEntity<?> getUserCardList(@PathVariable Integer uuid) {
        return ResponseEntity.ok(userCardService.getUserCardList(uuid));
    }
}
