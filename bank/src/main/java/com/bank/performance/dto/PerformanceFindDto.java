package com.bank.performance.dto;

import lombok.Getter;

@Getter
public class PerformanceFindDto {

    //실적 id
    private Integer id;

    //카드 id
    private Integer cardId;

    //실적 단계
    private Integer level;

}
