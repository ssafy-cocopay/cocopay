package com.cocopay.usercard.dto;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class UserCardDetailResponseDto {
    //사용자 카드 아이디
    private int userCardId;
    //사용자 카드 이름
    private String cardName;
    //현재 달성한 실적 단계
    private int level;

    //내 실적 단계 +1에 해당하는 단계
    private int nextLevel;

    //다음 실적까지 남은 금액
    private int price;

    //달성한 비율
    private int percent;

    //이번달 총 금액
    private int totalPrice;
}
