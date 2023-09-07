package com.bank.account.mapper;

import com.bank.account.dto.AccountRegistDto;
import com.bank.account.entity.Account;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface AccountMapper {
    @Mapping(source = "account_num", target = "num")
    Account accountRegistDtoToAccount(AccountRegistDto accountRegistDto);


}
