package com.bank.performance.repository;

import com.bank.performance.entity.Performance;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PerformanceRepository extends JpaRepository<Performance, Integer>, PerformanceRepositoryCustom {
}
