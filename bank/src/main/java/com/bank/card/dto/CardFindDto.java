package com.bank.card.dto;

import com.bank.card.entity.CardType;
import lombok.Getter;

@Getter
public class CardFindDto {
    private Integer cardUuid;
    private Integer cardId;
    private CardType cardType;
    private String cardName;
    private int balance;
}
