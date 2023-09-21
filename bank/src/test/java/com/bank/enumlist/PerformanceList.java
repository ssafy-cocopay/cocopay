package com.bank.enumlist;

import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public enum PerformanceList {
    실적("신한카드 Deep Dream 체크", 1, 10000),
    실적11("카카오뱅크 프렌즈 체크카드", 1, 300000),
    실적1("DA@카드의정석", 0, 0),

    실적2("노리2 체크카드(KB Pay)", 1, 10000),
    실적3("KB국민 My WE:SH 카드", 1, 400000),
    실적4("현대카드Z family", 1, 400000),
    실적14("현대카드Z family", 2, 800000),
    실적6("현대카드ZERO Edition2(할인형)", 1, 300000),
    실적7("삼성 iD ON 카드", 1, 300000),
    실적17("삼성 iD ON 카드", 2, 600000),
    실적8("taptap DIGITAL", 1, 300000),
    실적10("taptap DIGITAL", 2, 600000),
    실적111("taptap DIGITAL", 3, 900000),
    실적9("신한카드 Mr.Life", 1, 300000);

    final String cardName;

    final int level;

    final int levelPrice;

    PerformanceList(String cardName, int level, int levelPrice) {
        this.cardName = cardName;
        this.level = level;
        this.levelPrice = levelPrice;
    }

    public String getCardName() {
        return cardName;
    }

    public int getLevel() {
        return level;
    }

    public int getLevelPrice() {
        return levelPrice;
    }
}
