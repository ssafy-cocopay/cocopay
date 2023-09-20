package com.cocopay.usercard.controller;

import com.cocopay.usercard.dto.UserCardDto;
import com.cocopay.usercard.dto.UserCardRegisterDto;
import com.cocopay.usercard.entity.UserCard;
import com.cocopay.usercard.service.UserCardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/cards")
public class UserCardController {
    private final UserCardService userCardService;
    //카드 등록
    @PostMapping("")
    public ResponseEntity<?> registerCard(@RequestBody UserCardRegisterDto userCardRegisterDto){
        boolean cocopay = false;
        return ResponseEntity.ok(userCardService.registUserCard(userCardRegisterDto,cocopay));
    }

    //카드 목록 조회
    @GetMapping("/{userId}")
    public ResponseEntity<List<UserCard>> FindUserCard(@PathVariable("userId") Integer userid){
        return ResponseEntity.ok(userCardService.findUserCardList(userid));
    }
}
