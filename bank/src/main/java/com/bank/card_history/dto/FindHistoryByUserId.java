package com.bank.card_history.dto;

import lombok.Getter;

import java.time.LocalDateTime;
@Getter
public class FindHistoryByUserId {
    private Integer userId;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
}
