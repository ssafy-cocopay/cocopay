package com.cocopay.usercard.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class FindHistoryByUserId {
    private Integer userId;
    private int month;
}
