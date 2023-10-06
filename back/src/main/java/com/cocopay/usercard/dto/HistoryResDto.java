package com.cocopay.usercard.dto;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Builder
@Getter
public class HistoryResDto {
    private long amount;
    private int discountAmount;
    private List<HistoryResponseDto> cardHistoryList;
}
