package com.cocopay.usercard.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class HistoryFindReqDto {
    private Integer cardUuid;
    private int month;
}
