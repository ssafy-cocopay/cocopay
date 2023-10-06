package com.cocopay.user.dto.request;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@Data
public class UserJoinDto {
    private String name;
    private String birth;
    private String company;
    private String tel;
    private String password;
    private String fcmToken;
}
