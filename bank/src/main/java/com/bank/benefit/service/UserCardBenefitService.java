package com.bank.benefit.service;

import com.bank.benefit.repository.UserCardBenefitRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class UserCardBenefitService {

    private final UserCardBenefitRepository userCardBenefitRepository;

    //특정 카드의 남은 혜택한도 조회
    public Integer findDiscountAmount(int cardUuid, int benefitId) {
        Integer discountAmount = userCardBenefitRepository.findDiscountAmount(cardUuid, benefitId);

        log.info("discountAmount : {}", discountAmount);

        return discountAmount;
    }
}
