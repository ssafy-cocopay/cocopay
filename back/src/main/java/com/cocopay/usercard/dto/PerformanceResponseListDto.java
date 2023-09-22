package com.cocopay.usercard.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class PerformanceResponseListDto {
    List<PerformanceResponseDto> performanceList;
}
