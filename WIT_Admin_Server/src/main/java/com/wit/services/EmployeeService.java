package com.wit.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wit.dao.EmployeeDAO;
import com.wit.dto.EmployeeDTO;
import com.wit.dto.DeptDTO;
import com.wit.dto.RoleDTO;
import com.wit.utill.PWUtill;

import java.util.List;

@Service
public class EmployeeService {

	@Autowired
	private EmployeeDAO dao;

	// 회원가입
	public int register(EmployeeDTO dto) {
		dto.setPw(PWUtill.encryptPassword(dto.getPw()));
		return dao.register(dto);
	}

	// 부서 목록 가져오기
	public List<DeptDTO> getAllDepts() {
		return dao.getAllDepts();
	}

	// 직급 목록 가져오기
	public List<RoleDTO> getAllRoles() {
		return dao.getAllRoles();
	}

	// 가장 높은 사원번호 가져오기
	public String getHighestEmployeeID(String deptCode) {
		return dao.getHighestEmployeeIDByDept(deptCode);
	}

	// 로그인
	public EmployeeDTO login(EmployeeDTO dto) {
		String encryptedPw = PWUtill.encryptPassword(dto.getPw());
		dto.setPw(encryptedPw);
		return dao.login(dto);
	}

	// 회원 탈퇴
	public int deleteEmployee(String empNo) {
		return dao.deleteEmployee(empNo);
	}
}
