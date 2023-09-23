package com.cocopay.redis.mapper;

import com.cocopay.payment.apicall.dto.res.UserCardBenefitInfoResponseDto;
import com.cocopay.payment.dto.req.PayPostDto;
import com.cocopay.payment.dto.res.PerformanceResDto;
import com.cocopay.redis.key.BenefitKey;
import com.cocopay.redis.key.OrderKey;
import com.cocopay.redis.key.PerformanceKey;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface RedisMapper {

    PerformanceKey toPerformanceKey(PerformanceResDto dto);

    List<PerformanceKey> toPerformanceKeyList(List<PerformanceResDto> dtoList);

    OrderKey toOrderKey(PayPostDto dto);

    BenefitKey toBenefitKey(UserCardBenefitInfoResponseDto dto);

    List<BenefitKey> toBenefitKeyList(List<UserCardBenefitInfoResponseDto> dtoList);
}