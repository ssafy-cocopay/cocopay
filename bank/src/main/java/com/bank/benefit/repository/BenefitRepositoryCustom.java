package com.bank.benefit.repository;

import com.bank.benefit.dto.BenefitInfoResponseDto;
import com.bank.benefit.entity.Benefit;
import com.bank.card_history.entity.Category;

import java.util.List;

public interface BenefitRepositoryCustom {
    List<Benefit> getBenefitListByCardUid(Integer cardUuid);

    //유저가 보유한 카드들의 특정 혜택 조회
    //ex) 신한, 국민, 농협의 CGV 혜택
    List<BenefitInfoResponseDto> findBenefitByCardList(List<Integer> cardUuidList, Category category, String storeName);
}
