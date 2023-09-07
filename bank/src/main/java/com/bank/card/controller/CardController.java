package com.bank.card.controller;

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
        List<UserCardResponseDto> res = new ArrayList<>();

        for (UserCard uc : result) {
            res.add(userCardMapper.userCardToResponseDto(uc));
        }

        return ResponseEntity.ok(res);
    }
}
