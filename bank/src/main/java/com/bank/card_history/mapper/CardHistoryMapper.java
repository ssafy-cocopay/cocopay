package com.bank.card_history.mapper;

import com.bank.card.dto.PaymentRequestDto;
import com.bank.card.entity.UserCard;
import com.bank.card_history.dto.CategoryDiscountDto;
import com.bank.card_history.dto.CategoryDto;
import com.bank.card_history.dto.CategoryPriceDto;
import com.bank.card_history.dto.HistoryResponseDto;
import com.bank.card_history.entity.CardHistory;
import com.bank.card_history.entity.DiscountType;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CardHistoryMapper {

    @Mapping(source = "id", target = "cardHistoryId")
    @Mapping(source = "userCard.id", target = "cardUuid")
    HistoryResponseDto historyToResponseDto(CardHistory cardHistory);

    List<HistoryResponseDto> toDtoList(List<CardHistory> cardHistories);

    @Mapping(source = "paymentRequestDto.userCard", target = "userCard")
    @Mapping(source = "paymentRequestDto.discountedPrice", target = "amount")
    @Mapping(source = "accountBalance", target = "accountBalance")
    @Mapping(source = "paymentRequestDto.store", target = "store")
   // @Mapping(source = "userCard.id", target = "id", ignore = true)
    @Mapping(source = "paymentRequestDto.discountPrice", target = "discountAmount")
    @Mapping(source = "paymentRequestDto.discountType", target = "discountType")
    @Mapping(source = "isPayback", target = "isPayback")
    CardHistory payRequestDtoToHistory(PaymentRequestDto paymentRequestDto,
                                       Integer accountBalance, Boolean isPayback);

    CategoryPriceDto categotyTocategotPrice(CategoryDto categoryDto);

    List<CategoryPriceDto> categotyTocategotPriceList(List<CategoryDto> categoryDtoList);

    CategoryDiscountDto categotyTocategotDiscount(CategoryDto categoryDto);

    List<CategoryDiscountDto> categotyTocategotDiscountList(List<CategoryDto> categoryDtoList);
}