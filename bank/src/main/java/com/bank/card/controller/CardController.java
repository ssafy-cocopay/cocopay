package com.bank.card.controller;

import com.bank.card.dto.FindBySerialNumber;
import com.bank.card.dto.UserCardRegisterDto;
import com.bank.card.dto.UserCardResponseDto;
import com.bank.card.entity.UserCard;
import com.bank.card.mapper.UserCardMapper;
import com.bank.card.service.UserCardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequiredArgsConstructor
@RequestMapping("/bank/card")
public class CardController {

    private final UserCardService userCardService;
    private final UserCardMapper userCardMapper;

    //사용자 카드 등록
    @PostMapping("")
    public ResponseEntity<?> registerCard(@RequestBody UserCardRegisterDto userCardRegisterDto) {
        UserCard userCard = userCardMapper.RegisterDtoToUserCard(userCardRegisterDto);

        userCardService.save(userCard);
        return ResponseEntity.ok("사용자 카드 등록 완료");
    }

    // 사용자 카드 목록 조회
    @GetMapping("/{uuid}")
    public ResponseEntity<?> getUserCardList(@PathVariable Integer uuid) {
        List<UserCard> result = userCardService.getUserCardList(uuid);

        return ResponseEntity.ok(userCardMapper.toDtoList(result));
    }


    //사용자 카드 실적 조회
    @GetMapping("/performance/{card_uuid}")
    public ResponseEntity<?> getUserCardPerformanceList(@PathVariable("card_uuid") Integer cardUuid) {
        return ResponseEntity.ok(userCardService.getUserCardPerformance(cardUuid));
    }

    //시리얼 번호로 카드 조회
    @PostMapping("/search")
    public ResponseEntity<?> getUserCard(@RequestBody FindBySerialNumber findBySerialNumber){
        return ResponseEntity.ok(userCardService.getUserCard(findBySerialNumber.getSerialNumber(),findBySerialNumber.getCvc(),findBySerialNumber.getPassword()));
    }
}
