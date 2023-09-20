package com.cocopay.user.dto;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@Data
public class UserJoinDto {
    private String name;
    private String birth;
    private int sex;
    private String company;
    private String tel;

}
