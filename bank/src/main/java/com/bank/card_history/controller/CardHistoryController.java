package com.bank.card_history.controller;

import com.bank.card_history.dto.FindHistoryByUserId;
import com.bank.card_history.dto.HistoryFindDto;
import com.bank.card_history.dto.TotalByMonth;
import com.bank.card_history.dto.TotalByMonthReqDto;
import com.bank.card_history.entity.CardHistory;
import com.bank.card_history.mapper.CardHistoryMapper;
import com.bank.card_history.service.CardHistoryService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/bank/card-history")
@RequiredArgsConstructor
public class CardHistoryController {

    private final CardHistoryService cardHistoryService;
    private final CardHistoryMapper cardHistoryMapper;

    //카드 결제 내역 조회
    @PostMapping("")
    ResponseEntity<?> getCardHistoryByMonth(@RequestBody HistoryFindDto historyFindDto) {
        List<CardHistory> result = cardHistoryService.getCardHistory(historyFindDto);

        return ResponseEntity.ok(cardHistoryMapper.toDtoList(result));
    }

    //사용자 아이디로 사용한 금액 조회
    @PostMapping("/total")
    ResponseEntity<?> getCardHistoryByUserId(@RequestBody FindHistoryByUserId findHistoryByUserId) {
        return ResponseEntity.ok(cardHistoryService.getAllamount(findHistoryByUserId));
    }

    @PostMapping("/total/price")
    ResponseEntity<?> getTotalPriceByUserId(@RequestBody FindHistoryByUserId findHistoryByUserId) {
        return ResponseEntity.ok(cardHistoryService.getAllPrice(findHistoryByUserId));
    }
    @PostMapping("/total/discount")
    ResponseEntity<?> getTotalDiscountByUserId(@RequestBody FindHistoryByUserId findHistoryByUserId) {
        return ResponseEntity.ok(cardHistoryService.getAllDiscount(findHistoryByUserId));
    }


    @PostMapping("/total/amount")
    ResponseEntity getTotalAmount(@RequestBody TotalByMonthReqDto totalByMonth) {
        TotalByMonth res = cardHistoryService.getTotalByMonth(totalByMonth.getCardUuidList(), totalByMonth.getMonth());

        return ResponseEntity.ok(res);
    }

    @GetMapping("/{card-history-id}")
    public ResponseEntity getDiscountAmount(@PathVariable ("card-history-id") int cardHistoryId) {
        CardHistory findHistory = cardHistoryService.findCardHistoryById(cardHistoryId);
        int discounted = cardHistoryService.findDiscounted(findHistory);


        return ResponseEntity.ok(discounted);
    }
}
