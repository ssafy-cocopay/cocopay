package com.bank.account_history.mapper;

import com.bank.account_history.dto.AccountHistoryResponseDto;
import com.bank.account_history.entity.AccountHistory;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AccountHistoryMapper {
    @Mapping(source = "account.num", target = "accountNum")
    AccountHistoryResponseDto accountHistoryToaccountHistoryResponseDto(AccountHistory accountHistory);

    List<AccountHistoryResponseDto> TodtoList(List<AccountHistory> accountHistories);
}

