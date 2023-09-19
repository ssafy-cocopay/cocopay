package com.bank.installment.repository;

import com.bank.installment.entity.Installment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InstallmentRepository extends JpaRepository<Installment, Integer>, InstallmentRepositoryCustom {
}
