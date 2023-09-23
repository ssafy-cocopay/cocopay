package com.cocopay.payment.mapper;

import com.cocopay.payment.apicall.dto.req.PaymentReqDto;
import com.cocopay.payment.apicall.dto.req.UserCardBenefitBodyDto;
import com.cocopay.payment.dto.req.FinalPayReqDto;
import com.cocopay.payment.dto.req.PayPostDto;
import com.cocopay.payment.dto.res.CardOfferResDto;
import com.cocopay.payment.dto.res.CardOfferResponseDto2;
import com.cocopay.payment.dto.res.CardResponseDto;
import com.cocopay.redis.key.OrderKey;
import com.cocopay.redis.key.PerformanceKey;
import com.cocopay.usercard.entity.UserCard;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

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
    @Mapping(source = "key.price", target = "cardPerformanceAmount")
    @Mapping(source = "key.totalPrice", target = "cardCurrentAmount")
    CardOfferResDto toResponseDto(PerformanceKey key, UserCard userCard, int orderPrice, int finalPrice, String discountType);

    CardOfferResponseDto2 toResponseDto2(PerformanceKey performance, CardResponseDto card, int orderPrice);

    @Mapping(source = "id", target = "cardUuid")
    CardResponseDto toCardResponseDto(UserCard userCard);

    @Mapping(source = "dto.finalPrice", target = "requestPrice")
    @Mapping(source = "key.storeName", target = "store")
    PaymentReqDto toPaymentReqDto(OrderKey key, FinalPayReqDto dto, int cardUuid);

    @Mapping(source = "dto.storeName", target = "store")
    @Mapping(source = "dto.orderPrice", target = "requestPrice")
    PaymentReqDto toPaymentReqDto2(PayPostDto dto, int cardUuid);

    //혜택조회 api call 할 때 사용할 body dto
    default UserCardBenefitBodyDto toBenefitBodyDto(List<CardOfferResDto> list, String category, String storeName) {

        List<Integer> cardUuidList = list.stream()
                .map(CardOfferResDto::getCardUuid)
                .toList();

        return UserCardBenefitBodyDto.builder()
                .cardUuidList(cardUuidList)
                .category(category)
                .storeName(storeName)
                .build();
    }


}
