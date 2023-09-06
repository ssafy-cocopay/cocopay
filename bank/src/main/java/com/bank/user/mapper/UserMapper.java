package com.bank.user.mapper;

import com.bank.user.dto.UserRegistDto;
import com.bank.user.entity.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User userRegistDtoToUser(UserRegistDto userRegistDto);
}
