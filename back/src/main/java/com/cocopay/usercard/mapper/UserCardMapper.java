package com.cocopay.usercard.mapper;

import com.cocopay.usercard.dto.MainCardDto;
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
}
