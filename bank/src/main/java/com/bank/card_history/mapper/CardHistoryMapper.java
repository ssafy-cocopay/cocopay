package com.bank.card_history.mapper;

import com.bank.card_history.dto.HistoryResponseDto;
import com.bank.card_history.entity.CardHistory;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CardHistoryMapper {

    @Mapping(source = "id", target = "cardHistoryId")
    @Mapping(source = "userCard.id", target = "cardUuid")
    HistoryResponseDto historyToResponseDto(CardHistory cardHistory);

    List<HistoryResponseDto> toDtoList(List<CardHistory> cardHistories);
}
