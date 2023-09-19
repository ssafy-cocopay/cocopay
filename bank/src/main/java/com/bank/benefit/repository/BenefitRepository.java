package com.bank.benefit.repository;

import com.bank.benefit.entity.Benefit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BenefitRepository extends JpaRepository<Benefit, Integer>, BenefitRepositoryCustom{
}
