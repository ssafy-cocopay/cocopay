package com.bank.performance.controller;

import com.bank.performance.dto.*;
import com.bank.performance.entity.Performance;
import com.bank.performance.service.PerformanceService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/bank/performance")
public class PerformanceController {
    private final PerformanceService performanceService;

    @PostMapping("/regist")
    public ResponseEntity registPerformance(@RequestBody PerformanceRegistDto performanceRegistDto){

        performanceService.registPerformance(performanceRegistDto);
        return ResponseEntity.ok("실적 등록 완료");
    }

    //실적 조회
    @GetMapping
    public ResponseEntity<List<Performance>> findPerformance(@RequestBody PerformanceFindDto performanceFindDto){
        List<Performance> performanceList = performanceService.findPerformance(performanceFindDto.getId(),performanceFindDto.getCardId(),performanceFindDto.getLevel());
        return ResponseEntity.ok(performanceList);
    }

    @PostMapping("/list")
    public ResponseEntity findAllPerformance(@RequestBody UserCardPerformanceFindDto userCardPerformanceFindDto){
        log.info("userCardPerformanceFindDto : {}", userCardPerformanceFindDto);

        List<PerformanceResponseDto> performanceResponseListDto = performanceService.findPerformanceList(userCardPerformanceFindDto.getCardUuidList());

        PerformanceResponseListDto responseListDto = new PerformanceResponseListDto(performanceResponseListDto);
        return ResponseEntity.ok(responseListDto);
    }
}
