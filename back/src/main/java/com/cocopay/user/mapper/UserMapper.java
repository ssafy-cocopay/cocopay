package com.cocopay.user.mapper;

import com.cocopay.user.dto.request.TotalByMonthReqDto;
import com.cocopay.user.dto.response.AuthInformation;
import com.cocopay.user.entity.User;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {
    TotalByMonthReqDto toTotalByMonthReqDto(List<Integer> cardUuidList, int month);

    AuthInformation toAuthInformationByUser(User user);
}
