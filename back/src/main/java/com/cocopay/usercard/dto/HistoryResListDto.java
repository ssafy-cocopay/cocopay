package com.cocopay.usercard.dto;

import lombok.*;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class HistoryResListDto {
    List<HistoryResponseDto> historyResponseDtoList;
}
