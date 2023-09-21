package com.bank.enumlist;

import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public enum PerformanceList {
    신한1("신한카드 Deep Dream 체크",1,10000),
    노리2("노리2 체크카드(KB Pay)",1,10000);

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
