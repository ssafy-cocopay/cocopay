package com.bank.benefit.service;

import com.bank.benefit.dto.BenefitInfoResponseDto;
import com.bank.benefit.entity.Benefit;
import com.bank.benefit.repository.BenefitRepository;
import com.bank.card_history.entity.Category;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class BenefitService {
    private final BenefitRepository benefitRepository;

    public List<Benefit> getBenefitList(Integer cardUuid) {
        return benefitRepository.getBenefitListByCardUid(cardUuid);
    }

    //사용자가 보유한 카드들의 특정 혜택 조회
    public List<BenefitInfoResponseDto> findBenefitList(List<Integer> cardUuidList, Category category, String storeName) {
        log.info("cardUuidList : {}", cardUuidList);
        log.info("category : {}", category);
        log.info("storeName : {}", storeName);
        return benefitRepository.findBenefitByCardList(cardUuidList, category, storeName);
    }

    //할인울 계산
}
