package com.bank.card_history.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TotalByMonthReqDto {
    private List<Integer> cardUuidList;

    private int month;
}
