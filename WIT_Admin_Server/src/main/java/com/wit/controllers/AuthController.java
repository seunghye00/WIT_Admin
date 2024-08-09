package com.wit.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.wit.dto.EmployeeDTO;
import com.wit.services.EmployeeService;
import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/auth")
public class AuthController {

	@Autowired
	private EmployeeService service;

	@Autowired
	private HttpSession session;

	// 로그인
	@PostMapping
	public ResponseEntity<String> login(@RequestBody EmployeeDTO dto) {
		EmployeeDTO result = service.login(dto);
		// 사장만 로그인 가능!
		if (result == null || !"R1".equals(result.getRole_code())) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Login Failed");
		}
		session.setAttribute("loginID", dto.getEmp_no()); // 로그인한 아이디의 세션을 담아둔다
		return ResponseEntity.ok(dto.getEmp_no()); // 로그인에 성공한 아이디를 돌려보낸다
	}

	// 로그아웃
	@DeleteMapping
	public ResponseEntity<Void> logout() {
		session.invalidate();
		return ResponseEntity.ok().build();
	}
}
