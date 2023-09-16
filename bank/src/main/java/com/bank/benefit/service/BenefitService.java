package com.bank.benefit.service;

import com.bank.benefit.entity.Benefit;
import com.bank.benefit.repository.BenefitRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BenefitService {
    private final BenefitRepository benefitRepository;

    public List<Benefit> getBenefitList(Integer cardUuid) {
        return benefitRepository.getBenefitListByCardUid(cardUuid);
    }
}
