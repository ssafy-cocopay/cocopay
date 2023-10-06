package com.cocopay.usercard.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class HistoryResDtoTemp {
    private List<HistoryResponseDto> cardHistoryList;
}
