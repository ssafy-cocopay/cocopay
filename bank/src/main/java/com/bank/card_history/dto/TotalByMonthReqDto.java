package com.bank.card_history.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
public class TotalByMonthReqDto {
    private List<Integer> cardUuidList;

    private int month;
}
