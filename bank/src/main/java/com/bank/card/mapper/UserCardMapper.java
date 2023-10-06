package com.bank.card.mapper;

import com.bank.card.dto.UserCardRegisterDto;
import com.bank.card.dto.UserCardResponseDto;
import com.bank.card.entity.UserCard;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.time.LocalDateTime;
import java.util.List;

@Mapper(componentModel = "spring")
public interface UserCardMapper {

    @Mapping(source = "accountId", target = "account.id")
    @Mapping(source = "cardId", target = "card.id")
    UserCard RegisterDtoToUserCard(UserCardRegisterDto userCardRegisterDto);

    @Mapping(source = "id", target = "cardUuid")
    @Mapping(source = "account.id", target = "accountId")
    @Mapping(source = "card.id", target = "cardId")
    UserCardResponseDto userCardToResponseDto(UserCard userCard);

    List<UserCardResponseDto> toDtoList(List<UserCard> userCardResponseDtos);
}
