package com.cocopay.usercard.controller;

import com.cocopay.payment.dto.req.CardUuidListDto;
import com.cocopay.usercard.dto.*;
import com.cocopay.usercard.entity.UserCard;
import com.cocopay.usercard.mapper.UserCardMapper;
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
    private final UserCardMapper userCardMapper;

    //카드 등록
    @PostMapping("")
    public ResponseEntity<?> registerCard(@RequestHeader("userId") int userId, @RequestBody UserCardRegisterDto userCardRegisterDto){
        userCardRegisterDto.setUserId(userId);
        boolean cocopay = false;
        return ResponseEntity.ok(userCardService.registUserCard(userCardRegisterDto, cocopay));
    }

    //카드 목록 조회(코코페이 포함, 메인페이지에 들어갈것)
    @GetMapping("")
    public ResponseEntity<List<MainCardDto>> FindUserCard(@RequestHeader("userId") int userId) {
        List<UserCard> userCardList = userCardService.findAllUserCardList(userId);
        return ResponseEntity.ok(userCardMapper.userCardListToMainCardList(userCardList));
    }

    //카드 목록 조회(코코페이 빼고, 목록에 들어갈 카드 목록)
    @PostMapping("/list/")
    public ResponseEntity<List<UserCard>> UserCardList(@RequestHeader("userId") int userId){
        return ResponseEntity.ok(userCardService.findUserCardList(userId));
    }

    //카드 삭제
    @DeleteMapping("/{cardId}")
    public ResponseEntity<?> DeleteUserCard(@PathVariable("cardId") Integer cardId) {
        userCardService.deleteUserCard(cardId);
        return ResponseEntity.ok("사용자 카드 삭제 성공");
    }

    //사용자 통계 조회
    @PostMapping("/total")
    ResponseEntity<?> getCardHistoryByUserId(@RequestHeader("userId") int userId,@RequestBody FindHistoryByUserId findHistoryByUserId){
        findHistoryByUserId.setUserId(userId);
        return ResponseEntity.ok(userCardService.getAllamount(findHistoryByUserId));
    }

    //월단위 카드 이용 내역 조회
    @PostMapping("/history")
    ResponseEntity<?> getCardHistoryByMonth(@RequestHeader("userId") int userId,@RequestBody HistoryFindDto historyFindDto)
    {
        historyFindDto.setCardUuid(userId);
        List<HistoryResponseDto> result = userCardService.getCardHistory(historyFindDto);

        return ResponseEntity.ok(result);
    }

    //카드 정보 및 실적 조회
    @GetMapping("/detail/{cardId}")
    public ResponseEntity<?> getCardDetail(@PathVariable("cardId") Integer cardId) {
        UserCardDetailResponseDto userCardDetailResponseDto = userCardService.findUserCardDetail(cardId);
        return ResponseEntity.ok(userCardDetailResponseDto);
    }

    //카드 우선순위 변경
    @PostMapping("/order")
    public ResponseEntity<?> setCardOrder(@RequestBody CardUuidListDto cardUuidListDto) {
        userCardService.setCardOrder(cardUuidListDto.getCardUuidList());
        return ResponseEntity.ok("우선순위 변경 완료");
    }
}
