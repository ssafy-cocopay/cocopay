package com.cocopay.user.dto;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@Data
public class AuthRequestDto {
    private String tel;
}
