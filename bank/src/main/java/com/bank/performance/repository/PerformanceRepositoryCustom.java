package com.bank.performance.repository;

import com.bank.performance.dto.PerformanceResponseListDto;
import com.bank.performance.entity.Performance;

import java.util.List;

public interface PerformanceRepositoryCustom {

    List<Performance> findPerformance(Integer id, Integer cardId, Integer level);

    List<PerformanceResponseListDto> findPerformanceByCardList(List<Integer> cardUuidList);

}
