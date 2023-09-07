package com.bank.bank.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.mapstruct.Mapping;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BankResponseDto {
    private Integer bankId;
    private String bankName;
}
