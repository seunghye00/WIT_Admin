package com.wit.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.wit.services.EmployeeService;
import com.wit.dto.EmployeeDTO;
import com.wit.dto.DeptDTO;
import com.wit.dto.RoleDTO;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    private EmployeeService service;

    // 회원가입
    @PostMapping
    public ResponseEntity<Void> register(@RequestBody EmployeeDTO dto) {
        service.register(dto);
        return ResponseEntity.ok().build();
    }

    // 부서 목록 가져오기
    @GetMapping("/departments")
    public ResponseEntity<List<DeptDTO>> getDepartments() {
        List<DeptDTO> deptList = service.getAllDepts();
        return ResponseEntity.ok(deptList);
    }

    // 직급 목록 가져오기
    @GetMapping("/roles")
    public ResponseEntity<List<RoleDTO>> getRoles() {
        List<RoleDTO> roleList = service.getAllRoles();
        return ResponseEntity.ok(roleList);
    }

    // 가장 높은 사원번호 가져오기
    @PostMapping("/highestEmployeeID")
    public ResponseEntity<String> getHighestEmployeeID(@RequestBody Map<String, String> request) {
        String deptCode = request.get("dept");
        String highestID = service.getHighestEmployeeID(deptCode);
        return ResponseEntity.ok(highestID);
    }

    // 회원 탈퇴
    @DeleteMapping
    public ResponseEntity<Void> deleteEmployee(@RequestBody Map<String, String> request) {
        String empNo = request.get("emp_no");
        service.deleteEmployee(empNo);
        return ResponseEntity.ok().build();
    }
}
