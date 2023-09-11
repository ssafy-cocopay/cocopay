package com.bank.card.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PerformanceResponseDto {
    private Integer cardUuid;
    private Integer performance;
    private Integer userPerformance;
    private Boolean isPerformance; // 현재 실적을 달성했는지 여부
    private Boolean isPerformancePre; // 이전달에 실적을 달성했는지 여부

}
