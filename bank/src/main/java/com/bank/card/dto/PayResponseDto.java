package com.bank.card.dto;

import lombok.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Data
public class PayResponseDto {
    String cardName;
    Integer discount;
}
