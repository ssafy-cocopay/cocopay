package com.cocopay.user.dto.request;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@Data
public class LoginRequestDto {
    private Integer userId;
    private String password;
    private String fcmToken;
}
