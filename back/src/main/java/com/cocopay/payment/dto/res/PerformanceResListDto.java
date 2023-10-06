package com.cocopay.payment.dto.res;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PerformanceResListDto {
    List<PerformanceResDto> performanceList;
}
