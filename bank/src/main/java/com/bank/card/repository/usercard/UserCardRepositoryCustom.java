package com.bank.card.repository.usercard;

import com.bank.card.dto.PerformanceResponseDto;
import com.bank.card.dto.UserCardDto;
import com.bank.card.dto.UserCardResponseDto;
import com.bank.card.entity.UserCard;

import java.util.List;
import java.util.Optional;

public interface UserCardRepositoryCustom {
    List<UserCard> findUserCardByUUID(Integer uuid);

    Optional<PerformanceResponseDto> findUserCardPerformance(Integer cardUuid);

    UserCardDto findUSerCardBySerialNumber(String serialNumber, String cvc, String password);
}
