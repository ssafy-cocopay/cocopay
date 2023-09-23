package com.cocopay.payment.controller;

import com.cocopay.payment.dto.req.PayPostDto;
import com.cocopay.payment.dto.req.FinalPayReqDto;
import com.cocopay.payment.dto.res.CardOfferResDto;
import com.cocopay.payment.dto.res.OnlineResponse;
import com.cocopay.payment.service.PaymentService;
import com.cocopay.redis.service.OrderKeyService;
import com.cocopay.usercard.entity.UserCard;
import com.cocopay.usercard.service.UserCardService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/api/pay")
public class PaymentController {
    private final PaymentService paymentService;
    private final OrderKeyService orderKeyService;
    private final UserCardService userCardService;

    @PostMapping("/online")
    public ResponseEntity onlinePay(@RequestBody PayPostDto payPostDto) {
        orderKeyService.orderKeySave(payPostDto);

        List<CardOfferResDto> cardOfferResDtos = paymentService.autoChanging(payPostDto.getUserId(),
                payPostDto.getCategory(),
                payPostDto.getStoreName(),
                payPostDto.getOrderPrice());

        OnlineResponse<List<CardOfferResDto>> onlineResponse = new OnlineResponse<>(cardOfferResDtos);

        return ResponseEntity.ok(onlineResponse);
    }

    @PostMapping("/offline/{card-id}")
    public ResponseEntity offlinePay(@PathVariable ("card-id") int cardId,
                                     @RequestBody PayPostDto payPostDto) {
        payPostDto.setCardId(cardId);
        orderKeyService.orderKeySave(payPostDto);

        paymentService.autoOrDirect(payPostDto);
        return null;
    }

    @PostMapping()
    public ResponseEntity reqPay(@RequestBody FinalPayReqDto finalPayReqDto) {
        UserCard findUserCard = userCardService.findUserCardById(finalPayReqDto.getCardId());

        //최종 결제 진행
        paymentService.reqPay(finalPayReqDto,null, findUserCard.getCardUuid());

        return ResponseEntity.ok("결제 요청 완료");
    }
}
