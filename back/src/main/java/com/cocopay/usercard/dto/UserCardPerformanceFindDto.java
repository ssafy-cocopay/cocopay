package com.cocopay.usercard.dto;

import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserCardPerformanceFindDto {
    private List<Integer> cardUuidList;
}
