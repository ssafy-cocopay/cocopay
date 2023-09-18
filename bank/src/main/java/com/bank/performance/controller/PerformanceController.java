package com.bank.performance.controller;

import com.bank.performance.dto.PerformanceRegistDto;
import com.bank.performance.service.PerformanceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/bank/performance")
public class PerformanceController {
    private final PerformanceService performanceService;

    @PostMapping("/regist")
    public ResponseEntity registPerformance(@RequestBody PerformanceRegistDto performanceRegistDto){

        performanceService.registPerformance(performanceRegistDto);
        return ResponseEntity.ok("실적 등록 완료");
    }
}
