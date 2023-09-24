package com.cocopay.payment.controller;

import com.cocopay.payment.apicall.dto.req.PaymentReqDto;
import com.cocopay.payment.dto.req.FinalPayReqDto;
import com.cocopay.payment.dto.req.PayPostDto;
import com.cocopay.payment.dto.res.CardOfferResDto;
import com.cocopay.payment.dto.res.CardOfferResDtoTest;
import com.cocopay.payment.dto.res.OnlineResponse;
import com.cocopay.payment.mapper.PaymentMapperTest;
import com.cocopay.payment.service.PaymentService;
import com.cocopay.payment.service.PaymentServiceTest;
import com.cocopay.redis.key.OrderKey;
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
    private final PaymentServiceTest paymentServiceTest;
    private final PaymentMapperTest paymentMapperTest;

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
    public ResponseEntity offlinePay(@PathVariable("card-id") int cardId,
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
        paymentService.reqPay(finalPayReqDto, null, findUserCard.getCardUuid());

        return ResponseEntity.ok("결제 요청 완료");
    }

    //////////////////////////////리팩토링 테스트
    @PostMapping("/test")
    public ResponseEntity onlineFinalPay(@RequestBody PayPostDto payPostDto) {
        UserCard findUserCard = userCardService.findUserCardById(payPostDto.getCardId());

        OrderKey findOrderKey = orderKeyService.findOrderKey(payPostDto.getUserId());

        payPostDto.setCategory(findOrderKey.getCategory());
        payPostDto.setStoreName(findOrderKey.getStoreName());

        PaymentReqDto paymentReqDto = paymentMapperTest.toPaymentReqDto(findUserCard.getCardUuid(), payPostDto);

        paymentServiceTest.finalPayCall(paymentReqDto);

        return ResponseEntity.ok("결제 요청 완료");
    }

    @PostMapping("/online/test")
    public ResponseEntity onlinePayTest(@RequestBody PayPostDto payPostDto) {
        orderKeyService.orderKeySave(payPostDto);
        List<CardOfferResDtoTest> cardOffer = paymentServiceTest.autoChanging(payPostDto);

        OnlineResponse onlineResponse = new OnlineResponse(cardOffer);
        return ResponseEntity.ok(onlineResponse);
    }

    @PostMapping("/offtest/{card-id}")
    public ResponseEntity offlinePayTest(@RequestBody PayPostDto payPostDto,
                                         @PathVariable("card-id") int cardId) {
        orderKeyService.orderKeySave(payPostDto);
        log.info("요청 값 : {}", payPostDto);
        UserCard findUserCard = userCardService.findUserCardById(cardId);
        PaymentReqDto paymentReqDto;
        //코코카드임
        if (findUserCard.isCocoType()) {
            log.info("코코카드임");
            log.info("오토체인징 시스템 시작");
            CardOfferResDtoTest cardOfferResDtoTest = paymentServiceTest.autoChanging(payPostDto).get(0);
            int cardUuid = userCardService.findUserCardById(cardOfferResDtoTest.getCardId()).getCardUuid();
            paymentReqDto = paymentMapperTest.toPaymentReqDto(cardUuid, payPostDto, cardOfferResDtoTest.getFinalPrice());
        }
        //코코카드가 아님
        else {
            log.info("코코카드 아님");
            int cardUuid = userCardService.findUserCardById(cardId).getCardUuid();
            paymentReqDto = paymentMapperTest.toPaymentReqDto(cardUuid, payPostDto);
        }

        paymentServiceTest.finalPayCall(paymentReqDto);
        return ResponseEntity.ok("끝");
    }
}
