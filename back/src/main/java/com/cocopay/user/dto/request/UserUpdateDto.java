package com.cocopay.user.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserUpdateDto {
    private Boolean fingerprint;

    private Boolean barcode;

    private Boolean recommendType;

    private String password;
}

