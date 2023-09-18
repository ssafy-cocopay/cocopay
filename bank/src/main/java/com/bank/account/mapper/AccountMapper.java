package com.bank.account.mapper;

import com.bank.account.dto.AccountRegistDto;
import com.bank.account.dto.AccountResponseDto;
import com.bank.account.entity.Account;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AccountMapper {
    @Mapping(source = "accountNum", target = "num")
    Account accountRegistDtoToAccount(AccountRegistDto accountRegistDto);

    @Mapping(source = "user.name",target = "userName")
    @Mapping(source = "bank.bankName",target = "bankName")
    AccountResponseDto accountToAccountResponseDto(Account account);

    List<AccountResponseDto> TodtoList(List<Account> accounts);
}
