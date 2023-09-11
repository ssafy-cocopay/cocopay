package com.bank.benefit.mapper;

import com.bank.benefit.dto.BenefitResponseDto;
import com.bank.benefit.entity.Benefit;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface BenefitMapper {
    @Mapping(source = "id", target = "benefitId")
    @Mapping(source = "card.id", target = "cardId")
    BenefitResponseDto benefitToResponse(Benefit benefit);

    List<BenefitResponseDto> toDtoList(List<Benefit> benefits);
}
