package com.bank.installment.repository;

import com.bank.installment.entity.Installment;

import java.time.LocalDate;
import java.util.List;

public interface InstallmentRepositoryCustom {

    List<Installment> findInstallment(Integer id, Integer cardId);
}
