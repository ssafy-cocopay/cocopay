package com.bank.benefit.repository;

public interface UserCardBenefitRepositoryCustom {
    Integer findDiscountAmount(Integer cardUuid, Integer benefitId);
}
