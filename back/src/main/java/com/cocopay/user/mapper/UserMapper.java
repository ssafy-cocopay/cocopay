package com.cocopay.user.mapper;

import com.cocopay.user.dto.request.TotalByMonthReqDto;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {
    TotalByMonthReqDto toTotalByMonthReqDto(List<Integer> cardUuidList, int month);
}
