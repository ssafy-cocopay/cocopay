package com.bank.performance.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PerformanceResponseListDto {

    //사용자 카드 id
    private int cardUuid;

    //현재 달성한 실적 단계
    private int level;

    //내 실적 단계 +1에 해당하는 단계
    private int nextLevel;

    //채워야하는 조건 금액
    private int price;

    //이번달 총 금액
    private int totalPrice;

    //전월 실적 여부
    private boolean pastPerformance;

}
