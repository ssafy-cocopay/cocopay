package com.cocopay.usercard.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UserCardResDto {
    private int userCardId;
    private String serialNumber;
    private String cardType;
    private String cardName;
    private String validDate;
    private boolean visa;
    private boolean master;
    private String cardDefaultImage;
    private String graphRate;
}
