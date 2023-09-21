package com.bank.enumlist;

import com.bank.card_history.entity.DiscountType;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public enum BenefitList {

    실적1("카카오뱅크 프렌즈 체크카드","온라인쇼핑","쿠팡",5, DiscountType.페이백,1000000),
    실적2("카카오뱅크 프렌즈 체크카드","배달","배달의민족",10,DiscountType.페이백,1000000),
    실적3("카카오뱅크 프렌즈 체크카드","주유","GS칼텍스",3,DiscountType.페이백,1000000);

    final String cardName;
    final String category;
    final String storeName;
    final int discount;

    final DiscountType discountType;
    final int benefitLimit;

    BenefitList(String cardName, String category, String storeName, int discount, DiscountType discountType, int benefitLimit) {
        this.cardName = cardName;
        this.category = category;
        this.storeName = storeName;
        this.discount = discount;
        this.discountType = discountType;
        this.benefitLimit = benefitLimit;
    }

    public String getCardName() {
        return cardName;
    }

    public String getCategory() {
        return category;
    }

    public String getStoreName() {
        return storeName;
    }

    public int getDiscount() {
        return discount;
    }

    public DiscountType getDiscountType() {
        return discountType;
    }

    public int getBenefitLimit() {
        return benefitLimit;
    }
}
