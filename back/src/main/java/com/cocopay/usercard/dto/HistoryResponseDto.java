package com.cocopay.usercard.dto;

import com.cocopay.usercard.entity.Category;
import com.cocopay.usercard.entity.DiscountType;
import com.cocopay.usercard.entity.TransactionType;
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
    private Category category;
}
