package com.cocopay.usercard.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class MainCardDto {
    private int id;
    private int cardOrder;
    private boolean cocoType;
    private String cardImage;
    private String barcodeNum;
}
