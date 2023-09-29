package com.cocopay.payment.mapper;

import com.cocopay.payment.apicall.dto.req.PaymentReqDto;
import com.cocopay.payment.dto.req.PayPostDto;
import com.cocopay.payment.dto.res.CardOfferResDto;
import com.cocopay.payment.dto.res.PayCompleteResDto;
import com.cocopay.redis.key.PayCompleteKey;
import com.cocopay.redis.key.PerformanceKey;
import com.cocopay.usercard.entity.UserCard;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface PaymentMapper {

    @Mapping(source = "dto.storeName", target = "store")
    @Mapping(source = "dto.orderPrice", target = "requestPrice")
    PaymentReqDto toPaymentReqDto(int cardUuid, PayPostDto dto);

    @Mapping(source = "dto.storeName", target = "store")
    PaymentReqDto toPaymentReqDto(int cardUuid, PayPostDto dto, int requestPrice);

    @Mapping(source = "userCard.id", target = "cardId")
    @Mapping(source = "userCard.cardType.name",target = "cardType")
    @Mapping(source = "key.pastPerformance", target = "pastPerformance")
    @Mapping(source = "key.level", target = "curPerLevel")
    CardOfferResDto toCardOfferDto(UserCard userCard,
                                    String cardImage,
                                    Integer discountRate, String discountType,
                                    int discounted, int finalPrice,
                                    int remainingAmt, String graphRate,
                                    PerformanceKey key);

    PayCompleteResDto toPayCompleteResDto(PayCompleteKey payCompleteKey);
}
