package com.cocopay.payment.mapper;

import com.cocopay.payment.apicall.dto.req.PaymentRequestDto;
import com.cocopay.payment.dto.req.PickDto;
import com.cocopay.payment.dto.res.CardOfferResponseDto;
import com.cocopay.payment.dto.res.CardOfferResponseDto2;
import com.cocopay.payment.dto.res.CardResponseDto;
import com.cocopay.redis.key.OrderKey;
import com.cocopay.redis.key.PerformanceKey;
import com.cocopay.usercard.entity.UserCard;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface PaymentMapper {

    @Mapping(source = "userCard.id", target = "cardUuid")
    @Mapping(source = "userCard.serialNumber", target = "serialNumber")
    @Mapping(source = "userCard.cardName", target = "cardName")
    @Mapping(source = "userCard.visa", target = "visa")
    @Mapping(source = "userCard.master", target = "master")
    @Mapping(source = "userCard.cardDefaultImage", target = "cardDefaultImage")
    @Mapping(source = "userCard.cardOrder", target = "cardOrder")
    @Mapping(source = "userCard.cardType.name", target = "cardType")
    @Mapping(source = "key.level", target = "level")
    @Mapping(source = "key.nextLevel", target = "nextLevel")
    @Mapping(source = "key.price", target = "price")
    @Mapping(source = "key.totalPrice", target = "totalPrice")
    CardOfferResponseDto toResponseDto(PerformanceKey key, UserCard userCard, int orderPrice);

    CardOfferResponseDto2 toResponseDto2(PerformanceKey performance, CardResponseDto card, int orderPrice);

    @Mapping(source = "id", target = "cardUuid")
    CardResponseDto toCardResponseDto(UserCard userCard);

    @Mapping(source = "pickDto.cardUuid",target = "cardUuid")
    @Mapping(source = "pickDto.requestPrice",target = "requestPrice")
    @Mapping(source = "pickDto.transactionType",target = "transactionType")
    @Mapping(source = "pickDto.discountType",target = "discountType")
    @Mapping(source = "pickDto.benefitId",target = "benefitId")
    @Mapping(source = "key.category",target = "category")
    @Mapping(source = "key.storeName",target = "store")
    PaymentRequestDto toPaymentRequestDto(OrderKey key, PickDto pickDto);
}
