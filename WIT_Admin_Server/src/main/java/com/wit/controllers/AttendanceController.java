package com.wit.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.wit.services.AttendanceService;
import com.wit.dto.AttendanceDTO;

import java.sql.Date;
import java.util.List;

@RestController
@RequestMapping("/attendance")
public class AttendanceController {

    @Autowired
    private AttendanceService service;

    // 부서별 근무현황 조회 
    @GetMapping("/deptAtd")
    public List<AttendanceDTO> deptAtd(String deptTitle, Date startDate, Date endDate) {
//        System.out.println("Controller - Request received: deptTitle=" + deptTitle + ", startDate=" + startDate + ", endDate=" + endDate);
        List<AttendanceDTO> result = service.deptAtd(deptTitle, startDate, endDate);
//        System.out.println("Controller - Service result: " + result);
        return result;
    }
}
