package com.cocopay.user.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AuthInformation {
    private Integer id;
    private String name;
    private boolean recommendType;
    private boolean fingerprint;
    private boolean barcode;
}
