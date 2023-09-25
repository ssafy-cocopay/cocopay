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
    private boolean fingerprint;

    private boolean barcode;

    private boolean recommendType;

    private String password;
}

