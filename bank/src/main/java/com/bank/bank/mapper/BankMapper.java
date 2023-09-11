package com.bank.bank.mapper;

import com.bank.bank.dto.BankResponseDto;
import com.bank.bank.entity.Bank;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface BankMapper {
    @Mapping(source = "id", target = "bankId")
    BankResponseDto bankToResponseDto(Bank bank);
}
