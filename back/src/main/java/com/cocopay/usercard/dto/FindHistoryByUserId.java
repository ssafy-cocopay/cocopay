package com.cocopay.usercard.dto;

import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class FindHistoryByUserId {
    private Integer userId;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
}
