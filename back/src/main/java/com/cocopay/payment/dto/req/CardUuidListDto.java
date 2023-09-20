package com.cocopay.payment.dto.req;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CardUuidListDto {
    private List<Integer> cardUuidList;
}
