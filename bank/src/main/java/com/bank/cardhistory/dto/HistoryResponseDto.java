package com.bank.cardhistory.dto;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
@Data
public class HistoryResponseDto {
    private Integer cardHistoryId;
    private Integer cardUuid;
    private LocalDateTime transactionDate;
    private Long amount;
    private String store;
    private Long accountBalance;
}
