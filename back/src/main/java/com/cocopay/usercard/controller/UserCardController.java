package com.cocopay.usercard.controller;

import com.cocopay.usercard.dto.*;
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

    //카드 삭제
    @DeleteMapping("/{cardId}")
    public ResponseEntity<?> DeleteUserCard(@PathVariable("cardId") Integer cardId){
        userCardService.deleteUserCard(cardId);
        return ResponseEntity.ok("사용자 카드 삭제 성공");
    }

    //사용자 통계 조회
    @PostMapping("/total")
    ResponseEntity<?> getCardHistoryByUserId(@RequestBody FindHistoryByUserId findHistoryByUserId){
        return ResponseEntity.ok(userCardService.getAllamount(findHistoryByUserId));
    }

    //월단위 카드 이용 내역 조회
    @PostMapping("/history")
    ResponseEntity<?> getCardHistoryByMonth(@RequestBody HistoryFindDto historyFindDto)
    {
        List<HistoryResponseDto> result = userCardService.getCardHistory(historyFindDto);

        return ResponseEntity.ok(result);
    }
}
