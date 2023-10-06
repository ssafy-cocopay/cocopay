package com.bank.benefit.repository;

import com.bank.benefit.entity.UserCardBenefit;

public interface UserCardBenefitRepositoryCustom {
    Integer findDiscountAmount(Integer cardUuid, Integer benefitId);

    UserCardBenefit findUserCardBenefit(Integer cardUuid, Integer benefitId);
}
