package com.bank.performance.controller;

import com.bank.performance.service.PerformanceService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/bank/performance")
public class PerformanceController {
    private final PerformanceService performanceService;
}
