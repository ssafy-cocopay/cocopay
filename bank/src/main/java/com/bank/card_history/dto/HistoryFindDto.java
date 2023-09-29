package com.bank.card_history.dto;

import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class HistoryFindDto {
    private Integer cardUuid;
    private int month;
}
