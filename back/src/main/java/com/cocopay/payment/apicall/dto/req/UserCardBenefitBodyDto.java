package com.cocopay.payment.apicall.dto.req;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Builder
@Getter
public class UserCardBenefitBodyDto {
    private List<Integer> cardUuidList;

    private String category;

    private String storeName;
}