package com.wit.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.wit.dto.EmployeeDTO;
import com.wit.dto.DeptDTO;
import com.wit.dto.RoleDTO;

import java.util.List;

@Repository
public class EmployeeDAO {

	@Autowired
	private SqlSession mybatis;

	// 회원가입
	public int register(EmployeeDTO dto) {
		return mybatis.insert("employee.register", dto);
	}

	// 부서 목록 가져오기
	public List<DeptDTO> getAllDepts() {
		return mybatis.selectList("employee.getAllDepts");
	}

	// 직급 목록 가져오기
	public List<RoleDTO> getAllRoles() {
		return mybatis.selectList("employee.getAllRoles");
	}

	// 가장 높은 사원번호 가져오기
	public String getHighestEmployeeIDByDept(String deptCode) {
		return mybatis.selectOne("employee.getHighestEmployeeIDByDept", deptCode);
	}

	// 로그인
	public EmployeeDTO login(EmployeeDTO dto) {
		System.out.println(dto.getEmp_no());
		System.out.println(dto.getPw());
		EmployeeDTO result = mybatis.selectOne("employee.login", dto);
		System.out.println("DAO " + result);
		return result;
	}

	// 회원 탈퇴
	public int deleteEmployee(String empNo) {
		return mybatis.delete("employee.delete", empNo);
	}
}
