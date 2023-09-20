package com.bank.card.dto;

import com.bank.card.entity.CardType;
import com.querydsl.core.annotations.QueryProjection;
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
