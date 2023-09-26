package com.cocopay.payment.dto.res;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class CardOfferResDto {
    //carduuid 아님
    private int cardId;

    private String cardName;

    private String cardImage;

    private String cardType;

    private String serialNumber;

    private boolean visa;

    private boolean master;

    //사용자 카드 우선 순위
    private int cardOrder;

    //할인 예정 금액
    private int discounted;

    //할인율
    private int discountRate;

    //할인 타입 (페이백, 현장할인, 청구할인)
    private String discountType;

    //최종 결제 금액
    private int finalPrice;

    //다음 실적까지 남은 금액
    private int remainingAmt;

    //실적 그래프 퍼센트
    private double graphRate;

    //전월실적 달성 여부 -> 내가 이번 달 혜택을 받을 수 있는지
    private boolean pastPerformance;

    private int curPerLevel;
}
