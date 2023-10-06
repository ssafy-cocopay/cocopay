package com.cocopay.usercard.dto;


import lombok.*;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CardListDto {
    private Integer id;
    private String serialNumber;
    private int cardOrder;
    private String cardType;
    private String cardName;
    private boolean visa;
    private boolean master;
    private String cardImage;
    private String graphRate;
}
