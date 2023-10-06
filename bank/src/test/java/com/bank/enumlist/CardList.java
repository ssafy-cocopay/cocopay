package com.bank.enumlist;

import com.bank.card.entity.CardType;
import org.springframework.boot.test.context.SpringBootTest;


@SpringBootTest
public enum CardList {
    Deep_Dream_체크("신한", "Deep Dream", CardType.체크카드,true,false),
    카카오_프렌즈_체크("카카오뱅크", "프렌즈", CardType.체크카드,false,true),
    노리2("국민", "노리2 (KB Pay)", CardType.체크카드,true,true),
    신한마이라이프("신한", "Mr.Life", CardType.신용카드,true,true),
    삼성탭탭("삼성", "taptap DIGITAL", CardType.신용카드,true,false),
    삼성온카드("삼성", "iD ON", CardType.신용카드,false,true),
    현대제로("현대", "ZERO Edition2(할인형)", CardType.신용카드,true,false),
    현대패밀리("현대", "Z family", CardType.신용카드,true,true),
    국민위시("국민", "My WE:SH", CardType.신용카드,false,true),
    카드의정석("국민", "DA@카드의정석", CardType.신용카드,false,true);

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
