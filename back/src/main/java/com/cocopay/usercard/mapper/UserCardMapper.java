package com.cocopay.usercard.mapper;

import com.cocopay.usercard.dto.CardListDto;
import com.cocopay.usercard.dto.MainCardDto;
import com.cocopay.usercard.dto.UserCardDto;
import com.cocopay.usercard.dto.UserCardResDto;
import com.cocopay.usercard.entity.UserCard;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserCardMapper {
    @Mapping(source = "cardCustomImage",target = "cardImage",defaultValue = "defaultCardImage")
    default MainCardDto userCardToMainCard(UserCard userCard){
        if ( userCard == null ) {
            return null;
        }

        MainCardDto.MainCardDtoBuilder mainCardDto = MainCardDto.builder();


        if ( userCard.getCardCustomImage() != null ) {
            mainCardDto.cardImage( userCard.getCardCustomImage() );
        }
        else {
            mainCardDto.cardImage(userCard.getCardDefaultImage() );
        }
        if ( userCard.getId() != null ) {
            mainCardDto.id( userCard.getId() );
        }
        mainCardDto.cardOrder( userCard.getCardOrder() );
        mainCardDto.cocoType( userCard.isCocoType() );

        return mainCardDto.build();
    }

     List<MainCardDto> userCardListToMainCardList(List<UserCard> userCardList);


    default CardListDto userCardToCardListCard(UserCard userCard){
        if ( userCard == null ) {
            return null;
        }

        CardListDto.CardListDtoBuilder cardListDto = CardListDto.builder();

        cardListDto.id(userCard.getId());
        cardListDto.serialNumber(userCard.getSerialNumber());
        cardListDto.cardOrder(userCard.getCardOrder());
        cardListDto.cardType(userCard.getCardType());
        if(userCard.getCardNickname() != null){
            cardListDto.cardName(userCard.getCardNickname());
        }else{
            cardListDto.cardName(userCard.getCardName());
        }
        cardListDto.visa(userCard.isVisa());
        cardListDto.master(userCard.isMaster());
        if ( userCard.getCardCustomImage() != null ) {
            cardListDto.cardImage( userCard.getCardCustomImage() );
        }
        else {
            cardListDto.cardImage(userCard.getCardDefaultImage() );
        }

        return cardListDto.build();
    }

    List<CardListDto> userCardListToCardListList(List<UserCard> userCardList);

    @Mapping(source = "dto.cardType.name", target = "cardType")
    @Mapping(source = "dto.cardDefaulImage", target = "cardDefaultImage")
    UserCardResDto toUserCardResDto(UserCardDto dto);

    List<UserCardResDto> toList(List<UserCardDto> dtoList);
}
