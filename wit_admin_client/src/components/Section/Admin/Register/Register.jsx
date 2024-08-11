import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import styles from './Register.module.css'
import { host } from '../../../../config/config'

const Register = () => {
    const navigate = useNavigate()

    const departmentCodes = {
        D1: '01',
        D2: '02',
        D3: '03',
        D4: '04',
        D5: '05',
    }

    const [employee, setEmployee] = useState({
        emp_no: '',
        pw: '1233',
        name: '',
        dept_code: '',
        role_code: '',
    })

    const [deptList, setDeptList] = useState([])
    const [roleList, setRoleList] = useState([])

    useEffect(() => {
        axios
            .get(`http://${host}/employee/departments`)
            .then(response => {
                setDeptList(response.data)
            })
            .catch(error => {
                console.error('부서 목록을 가져오는 중 오류 발생:', error)
                alert('부서 목록을 불러오는 데 실패했습니다.')
            })

        axios
            .get(`http://${host}/employee/roles`)
            .then(response => {
                setRoleList(response.data)
            })
            .catch(error => {
                console.error('직급 목록을 가져오는 중 오류 발생:', error)
                alert('직급 목록을 불러오는 데 실패했습니다.')
            })
    }, [])

    const handleChange = e => {
        const { name, value } = e.target
        setEmployee(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    const generateEmployeeID = () => {
        const currentYear = new Date().getFullYear().toString()
        const deptCode = departmentCodes[employee.dept_code]

        if (!deptCode) {
            alert('부서를 먼저 선택하세요.')
            return
        }

        axios
            .post(`http://${host}/employee/highestEmployeeID`, {
                dept: employee.dept_code,
            })
            .then(response => {
                const highestID = response.data
                let entryOrder = 1

                if (highestID) {
                    const parts = highestID.split('-')
                    if (parts.length === 2) {
                        const lastEntryOrder = parseInt(parts[1].substring(2))
                        entryOrder = lastEntryOrder + 1
                    }
                }

                const newEmployeeID = `${currentYear}-${deptCode}${entryOrder
                    .toString()
                    .padStart(2, '0')}`

                setEmployee(prev => ({
                    ...prev,
                    emp_no: newEmployeeID,
                }))
            })
            .catch(error => {
                console.error('사원번호 생성 오류:', error)
                alert('사원번호 생성에 실패했습니다. 다시 시도하세요.')
            })
    }

    const handleRegister = () => {
        axios
            .post(`http://${host}/employee`, employee)
            .then(() => {
                alert('회원가입 성공')
                navigate('/')
            })
            .catch(error => {
                console.error('등록 오류:', error)
                alert('회원가입 실패. 다시 시도하세요.')
            })
    }

    return (
        <div className={styles['signup-container']}>
            <div className={styles['signup-form']}>
                <div className={styles.header}>회원가입</div>
                <div className={styles.formGroup}>
                    <select
                        name="dept_code"
                        className={styles.inputField}
                        value={employee.dept_code}
                        onChange={handleChange}
                    >
                        <option value="" disabled>
                            부서 선택
                        </option>
                        {deptList.map(dept => (
                            <option key={dept.dept_code} value={dept.dept_code}>
                                {dept.dept_title}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={styles.formGroup}>
                    <select
                        name="role_code"
                        className={styles.inputField}
                        value={employee.role_code}
                        onChange={handleChange}
                    >
                        <option value="" disabled>
                            직급 선택
                        </option>
                        {roleList.map(role => (
                            <option key={role.role_code} value={role.role_code}>
                                {role.role_title}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={styles.formGroup}>
                    <input
                        type="text"
                        name="emp_no"
                        placeholder="사원번호"
                        className={styles.inputField}
                        value={employee.emp_no}
                        readOnly
                    />
                    <button
                        className={`${styles.button} ${styles.primaryButton}`}
                        onClick={generateEmployeeID}
                    >
                        사원번호 생성
                    </button>
                </div>
                <div className={styles.formGroup}>
                    <input
                        type="password"
                        name="pw"
                        placeholder="비밀번호: 1233"
                        className={styles.inputField}
                        value={employee.pw}
                        readOnly
                    />
                </div>
                <div className={styles.formGroup}>
                    <input
                        type="text"
                        name="name"
                        placeholder="이름 입력"
                        className={styles.inputField}
                        value={employee.name}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.buttonContainer}>
                    <button
                        className={`${styles.button} ${styles.primaryButton}`}
                        onClick={handleRegister}
                    >
                        회원가입
                    </button>
                    <button
                        className={`${styles.button} ${styles.secondaryButton}`}
                        onClick={() => {
                            navigate('/')
                        }}
                    >
                        홈으로
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Register
