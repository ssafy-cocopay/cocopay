package com.cocopay.payment.controller;

import com.cocopay.payment.apicall.ApiCallService;
import com.cocopay.payment.apicall.dto.req.PaymentReqDto;
import com.cocopay.payment.dto.req.PayPostDto;
import com.cocopay.payment.dto.res.CardOfferResDto;
import com.cocopay.payment.dto.res.OnlineResponse;
import com.cocopay.payment.dto.res.PayAfterResDto;
import com.cocopay.payment.mapper.PaymentMapper;
import com.cocopay.payment.service.PaymentService;
import com.cocopay.redis.key.OrderKey;
import com.cocopay.redis.service.BarcodeKeyService;
import com.cocopay.redis.service.OrderKeyService;
import com.cocopay.redis.service.PerformanceKeyService;
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
    public ResponseEntity onlineFinalPay(@RequestHeader("userId") int userId,
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
                                        @RequestHeader("userId") int userId) {
        log.info("payPostDto : {}", payPostDto);
        payPostDto.setUserId(userId);
        orderKeyService.orderKeySave(payPostDto);
        List<CardOfferResDto> cardOffer = paymentService.autoChanging(payPostDto);

        OnlineResponse onlineResponse = new OnlineResponse(cardOffer);
        return ResponseEntity.ok(onlineResponse);
    }

    @PostMapping("/offline/{barcode-num}")
    public ResponseEntity offlinePayTest(@RequestBody PayPostDto payPostDto,
                                         @PathVariable("barcode-num") String barcodeNum,
                                         @RequestHeader("userId") int userId) {
        CardOfferResDto cardOfferResDto = new CardOfferResDto();
        payPostDto.setUserId(userId);
        orderKeyService.orderKeySave(payPostDto);
        log.info("요청 값 : {}", payPostDto);
        int cardId = barcodeKeyService.findCardId(userId, barcodeNum);
        log.info("바코드에서 추출한 카드id : {}", cardId);
        payPostDto.setCardId(cardId);

        UserCard findUserCard = userCardService.findUserCardById(cardId);
        PaymentReqDto paymentReqDto = paymentService.isCocoCard(findUserCard, payPostDto);

        //최종 결제 진행
        //card-history id 받아야 할 듯?
        Integer cardHistoryId = paymentService.finalPayCall(paymentReqDto);

        //필요한거 -> 사용자의 이번 달 총 이용금액
        //실적 정보 -> 해당 카드의 실적 정보
        //카드 이용내역 pk로 할인된 금액 받아오기
        PayAfterResDto payAfterResDto = paymentService.payAfter(cardHistoryId, paymentReqDto.getCardUuid());
        return ResponseEntity.ok(payAfterResDto);
    }
}
