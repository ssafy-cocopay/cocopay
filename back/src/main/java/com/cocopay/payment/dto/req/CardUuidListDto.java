package com.cocopay.payment.dto.req;

import lombok.*;

import java.util.List;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CardUuidListDto {
    private List<Integer> cardUuidList;
}
