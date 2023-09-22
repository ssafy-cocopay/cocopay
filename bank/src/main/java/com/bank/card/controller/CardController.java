package com.bank.card.controller;

import com.bank.card.dto.*;
import com.bank.card.entity.UserCard;
import com.bank.card.mapper.UserCardMapper;
import com.bank.card.service.UserCardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
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

    //코코페이를 위한 유저카드 리스트
    @GetMapping("/card-list/{uuid}")
    public ResponseEntity<?> getUserCardListForCoCo(@PathVariable Integer uuid)
    {
        List<UserCardDto> result = userCardService.findUserCardByUuid(uuid);

        UserCardResponseListDto wrapper = new UserCardResponseListDto(result);

        return ResponseEntity.ok(wrapper);
    }


    //사용자 카드 실적 조회
    @GetMapping("/performance/{card_uuid}")
    public ResponseEntity<?> getUserCardPerformanceList(@PathVariable("card_uuid") Integer cardUuid) {
        return ResponseEntity.ok(userCardService.getUserCardPerformance(cardUuid));
    }

    @PostMapping("/pay")
    ResponseEntity<?> payment(@RequestBody PaymentRequestDto paymentRequestDto) {
        //입력값 검증

        //서비스 호출
        if (paymentRequestDto.getBenefitId() == null) {
            return ResponseEntity.ok(userCardService.paymentWithoutBenefitId(paymentRequestDto));
        } else {
            return ResponseEntity.ok(userCardService.paymentWithBenefitId(paymentRequestDto));
        }
    }

    //시리얼 번호로 카드 조회
    @PostMapping("/search")
    public ResponseEntity<?> getUserCard(@RequestBody FindBySerialNumber findBySerialNumber){
        return ResponseEntity.ok(userCardService.getUserCard(findBySerialNumber.getSerialNumber(),findBySerialNumber.getCvc(),findBySerialNumber.getPassword()));
    }
}
