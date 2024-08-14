package com.wit.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.wit.dao.AttendanceDAO;
import com.wit.dto.AttendanceDTO;

import java.sql.Date;
import java.util.List;
import java.util.HashMap;
import java.util.Map;

@Service
public class AttendanceService {

	@Autowired
	private AttendanceDAO dao;

	// 부서별 근무현황 조회
	public List<AttendanceDTO> deptAtd(String deptTitle, Date startDate, Date endDate) {
//        System.out.println("Service - deptAtd called with: deptTitle=" + deptTitle + ", startDate=" + startDate + ", endDate=" + endDate);

		Map<String, Object> params = new HashMap<>();
		params.put("deptTitle", deptTitle);
		params.put("startDate", startDate);
		params.put("endDate", endDate);

//        System.out.println("Service - Parameters Map: " + params);

		List<AttendanceDTO> result = dao.deptAtd(params);
//        System.out.println("Service - DAO returned: " + result);

		return result;
	}
}
