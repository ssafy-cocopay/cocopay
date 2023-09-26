package com.cocopay.payment.controller;

import com.cocopay.payment.apicall.dto.req.PaymentReqDto;
import com.cocopay.payment.dto.req.PayPostDto;
import com.cocopay.payment.dto.res.CardOfferResDto;
import com.cocopay.payment.dto.res.OnlineResponse;
import com.cocopay.payment.mapper.PaymentMapper;
import com.cocopay.payment.service.PaymentService;
import com.cocopay.redis.key.OrderKey;
import com.cocopay.redis.service.BarcodeKeyService;
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

    private final OrderKeyService orderKeyService;
    private final UserCardService userCardService;
    private final PaymentService paymentService;
    private final PaymentMapper paymentMapperTest;
    private final BarcodeKeyService barcodeKeyService;

    @PostMapping()
    public ResponseEntity onlineFinalPay(@RequestHeader ("userId") int userId,
                                         @RequestBody PayPostDto payPostDto) {
        log.info("payPostDto : {}", payPostDto);
        payPostDto.setUserId(userId);
        UserCard findUserCard = userCardService.findUserCardById(payPostDto.getCardId());

        OrderKey findOrderKey = orderKeyService.findOrderKey(payPostDto.getUserId());

        payPostDto.setCategory(findOrderKey.getCategory());
        payPostDto.setStoreName(findOrderKey.getStoreName());

        log.info("최종 결제 할 카드 이름 : {}", findUserCard.getCardName());
        PaymentReqDto paymentReqDto = paymentMapperTest.toPaymentReqDto(findUserCard.getCardUuid(), payPostDto, findOrderKey.getOrderPrice());

        paymentService.finalPayCall(paymentReqDto);

        return ResponseEntity.ok("결제 요청 완료");
    }

    @PostMapping("/online")
    public ResponseEntity onlinePayTest(@RequestBody PayPostDto payPostDto,
                                        @RequestHeader ("userId") int userId) {
        log.info("payPostDto : {}",payPostDto);
        payPostDto.setUserId(userId);
        orderKeyService.orderKeySave(payPostDto);
        List<CardOfferResDto> cardOffer = paymentService.autoChanging(payPostDto);

        OnlineResponse onlineResponse = new OnlineResponse(cardOffer);
        return ResponseEntity.ok(onlineResponse);
    }

    @PostMapping("/offline/{barcode-num}")
    public ResponseEntity offlinePayTest(@RequestBody PayPostDto payPostDto,
                                         @PathVariable("barcode-num") String barcodeNum,
                                         @RequestHeader ("userId") int userId) {
        payPostDto.setUserId(userId);
        orderKeyService.orderKeySave(payPostDto);
        log.info("요청 값 : {}", payPostDto);
        int cardId = barcodeKeyService.findCardId(userId, barcodeNum);
        log.info("바코드에서 추출한 카드id : {}", cardId);

        UserCard findUserCard = userCardService.findUserCardById(cardId);
        PaymentReqDto paymentReqDto;
        //코코카드임
        if (findUserCard.isCocoType()) {
            log.info("코코카드임");
            log.info("오토체인징 시스템 시작");
            CardOfferResDto cardOfferResDto = paymentService.autoChanging(payPostDto).get(0);
            log.info("코코페이가 추천한 카드 이름 : {}", cardOfferResDto.getCardName());
            int cardUuid = userCardService.findUserCardById(cardOfferResDto.getCardId()).getCardUuid();
            paymentReqDto = paymentMapperTest.toPaymentReqDto(cardUuid, payPostDto, payPostDto.getOrderPrice());
        }
        //코코카드가 아님
        else {
            log.info("코코카드 아님");
            int cardUuid = userCardService.findUserCardById(cardId).getCardUuid();
            paymentReqDto = paymentMapperTest.toPaymentReqDto(cardUuid, payPostDto);
        }


        paymentService.finalPayCall(paymentReqDto);
        return ResponseEntity.ok("끝");
    }
}
