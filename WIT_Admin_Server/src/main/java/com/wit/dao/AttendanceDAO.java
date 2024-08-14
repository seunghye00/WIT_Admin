package com.wit.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.wit.dto.AttendanceDTO;

import java.util.List;
import java.util.Map;

@Repository
public class AttendanceDAO {

    @Autowired
    private SqlSession mybatis;

	// 부서별 근무현황 조회
    public List<AttendanceDTO> deptAtd(Map<String, Object> params) {
//        System.out.println("DAO - Query Parameters: " + params);
        List<AttendanceDTO> result = mybatis.selectList("attendance.deptAtd", params);
//        System.out.println("DAO - Query Result: " + result);
        return result;
    }
}
