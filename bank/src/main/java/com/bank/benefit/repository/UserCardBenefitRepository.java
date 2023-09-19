package com.bank.benefit.repository;

import com.bank.benefit.entity.UserCardBenefit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserCardBenefitRepository extends JpaRepository<UserCardBenefit,Integer>,UserCardBenefitRepositoryCustom {
}
