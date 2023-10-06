package com.cocopay.user.dto.request;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@Data
public class AuthRequestDto {
    private String tel;
}
