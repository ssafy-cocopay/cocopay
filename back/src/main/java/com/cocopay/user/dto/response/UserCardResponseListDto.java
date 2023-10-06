package com.cocopay.user.dto.response;

import com.cocopay.usercard.dto.UserCardDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserCardResponseListDto {
    List<UserCardDto> userCardList;
}
