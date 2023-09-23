package com.cocopay.payment.dto.req;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PickDto {
    private int userId;
    private Integer cardUuid;
    private Integer requestPrice;
    //일시불, 할부
    private String transactionType;
    
    //여기부터는 필수는 요청 값은 아님
    //할인 타입 (페이백, 청구할인, 현장할인)
    private String discountType;
    
    private Integer benefitId;
}