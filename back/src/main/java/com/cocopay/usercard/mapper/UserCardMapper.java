package com.cocopay.usercard.mapper;

import com.cocopay.user.entity.User;
import com.cocopay.usercard.dto.*;
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
        cardListDto.cardType(userCard.getCardType().getName());
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
    UserCardResDto toUserCardResDto(UserCardDto dto, String graphRate);

    @Mapping(source = "userCard.cardType.name",target = "cardType")
    CardListDto toCardListDto(UserCard userCard, String graphRate,String cardImage);

    @Mapping(source = "dto.userCardId", target = "cardUuid")
    @Mapping(source = "dto.cardDefaulImage",target = "cardDefaultImage")
    @Mapping(target = "registedDate",ignore = true)
    @Mapping(target = "withdrawDate",ignore = true)
    @Mapping(target = "id",ignore = true)
    @Mapping(source = "serialNumber",target = "serialNumber")
    UserCard toUserCard(User user, String serialNumber, boolean cocoType,int cardOrder,UserCardDto dto);

    HistoryResDto toHistoryResDto(long amount, int discountAmount, List<HistoryResponseDto> cardHistoryList);

}
