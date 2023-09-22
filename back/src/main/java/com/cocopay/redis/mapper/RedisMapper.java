package com.cocopay.redis.mapper;

import com.cocopay.payment.apicall.dto.res.UserCardBenefitInfoResponseDto;
import com.cocopay.payment.dto.res.PerformanceResDto;
import com.cocopay.redis.key.BenefitKey;
import com.cocopay.redis.key.OrderKey;
import com.cocopay.redis.key.PerformanceKey;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface RedisMapper {

    PerformanceKey toPerformanceKey(PerformanceResDto dto);

    List<PerformanceKey> toPerformanceKeyList(List<PerformanceResDto> dtoList);

    OrderKey toOrderKey(int userId, String category, String storeName, int orderPrice);

    BenefitKey toBenefitKey(UserCardBenefitInfoResponseDto dto);

    List<BenefitKey> toBenefitKeyList(List<UserCardBenefitInfoResponseDto> dtoList);
}