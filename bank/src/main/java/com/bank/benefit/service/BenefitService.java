package com.bank.benefit.service;

import com.bank.benefit.dto.BenefitInfoResponseDto;
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

    //사용자가 보유한 카드들의 특정 혜택 조회
    public List<BenefitInfoResponseDto> findBenefitList(List<Integer> cardUuidList, String category, String storeName) {
        return benefitRepository.findBenefitByCardList(cardUuidList, category, storeName);
    }
}
