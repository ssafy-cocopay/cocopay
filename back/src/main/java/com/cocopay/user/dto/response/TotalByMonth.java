package com.cocopay.user.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TotalByMonth {
    private long totalPayByMonth;

    private int totalDiscountByMonth;
}