package com.cocopay.redis.mapper;

import com.cocopay.payment.apicall.dto.res.BenefitResDto;
import com.cocopay.payment.dto.req.PayPostDto;
import com.cocopay.payment.dto.res.PerformanceResDto;
import com.cocopay.redis.key.*;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface RedisMapper {

    PerformanceKey toPerformanceKey(PerformanceResDto dto);

    List<PerformanceKey> toPerformanceKeyList(List<PerformanceResDto> dtoList);

    OrderKey toOrderKey(PayPostDto dto);

    BenefitKey toBenefitKey(BenefitResDto dto);

    List<BenefitKey> toBenefitKeyList(List<BenefitResDto> dtoList);

    BarcodeKey toBarcodeKey(int userId, int cardId, String barcodeNum);

    PayCompleteKey toPayCompleteKey(int userId, String cardImage, String cardName, int remainingAmt, String graphRate, int nextPerLevel, int discounted);
}