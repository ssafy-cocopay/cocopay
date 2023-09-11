package com.bank.benefit.repository;

import com.bank.benefit.entity.Benefit;

import java.util.List;

public interface BenefitRepositoryCustom {
    List<Benefit> getBenefitByCardUid(Integer cardUuid);
}
