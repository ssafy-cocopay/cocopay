package com.bank.enumlist;

import com.bank.card.entity.CardType;
import org.springframework.boot.test.context.SpringBootTest;


@SpringBootTest
public enum CardList {
    Deep_Dream_체크("신한", "신한카드 Deep Dream 체크", CardType.체크카드,true,false),
    카카오_프렌즈_체크("카카오뱅크", "카카오뱅크 프렌즈 체크카드", CardType.체크카드,false,true);

    final String bankName;

    final String cardName;

    final CardType type;

    final boolean visa;

    final boolean master;

    CardList(String bankName, String cardName, CardType type, boolean visa, boolean master) {
        this.bankName = bankName;
        this.cardName = cardName;
        this.type = type;
        this.visa = visa;
        this.master = master;
    }

    public String getBankName() {
        return bankName;
    }

    public String getCardName() {
        return cardName;
    }

    public CardType getType() {
        return type;
    }

    public boolean isVisa() {
        return visa;
    }

    public boolean isMaster() {
        return master;
    }
}
