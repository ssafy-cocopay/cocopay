package com.bank.cardhistory.dto;

import lombok.Getter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
public class HistoryFindDto {
    private Integer cardUuid;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
}
