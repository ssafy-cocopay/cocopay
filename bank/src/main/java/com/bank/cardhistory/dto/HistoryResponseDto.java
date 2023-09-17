package com.bank.cardhistory.dto;

import com.bank.cardhistory.entity.DiscountType;
import com.bank.cardhistory.entity.TransactionType;
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
    private Integer discountAmount;
    private DiscountType discountType;
    private TransactionType transactionType;
}
