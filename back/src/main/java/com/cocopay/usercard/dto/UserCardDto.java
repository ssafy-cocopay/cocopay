package com.cocopay.usercard.dto;

import com.cocopay.usercard.entity.CardType;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@Data
public class UserCardDto {
    private int userCardId;
    private String serialNumber;
    private CardType cardType;
    private String cardName;
    private String validDate;
    private boolean visa;
    private boolean master;
    private String cardDefaulImage;
}
