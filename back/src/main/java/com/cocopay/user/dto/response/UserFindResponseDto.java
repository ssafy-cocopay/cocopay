package com.cocopay.user.dto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UserFindResponseDto {
    private int uuid;
    private String name;
    private String tel;
}
