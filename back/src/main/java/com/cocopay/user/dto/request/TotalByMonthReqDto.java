package com.cocopay.user.dto.request;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
public class TotalByMonthReqDto {
    private List<Integer> cardUuidList;

    private int month;
}
