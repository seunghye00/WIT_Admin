import React, { useState } from 'react'
import style from './Attendance.module.css'
import 'boxicons/css/boxicons.min.css'

const Attendance = () => {
    const [selectedDept, setSelectedDept] = useState('인사')

    // 부서별 임시 데이터
    const departments = {
        인사: [
            {
                id: 1,
                name: '사장 홍길동',
                times: [
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                ],
            },
            {
                id: 2,
                name: '부장 김철수',
                times: [
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                ],
            },
        ],
        영업: [
            {
                id: 1,
                name: '사장 이영업',
                times: [
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                ],
            },
            {
                id: 2,
                name: '부장 박영업',
                times: [
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                ],
            },
        ],
        IT: [
            {
                id: 1,
                name: '사장 최기술',
                times: [
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                ],
            },
            {
                id: 2,
                name: '부장 정기술',
                times: [
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                ],
            },
        ],
        마케팅: [
            {
                id: 1,
                name: '사장 김마케팅',
                times: [
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                ],
            },
            {
                id: 2,
                name: '부장 박마케팅',
                times: [
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                ],
            },
        ],
        기술지원: [
            {
                id: 1,
                name: '사장 이기술',
                times: [
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                ],
            },
            {
                id: 2,
                name: '부장 정기술',
                times: [
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                    '09:00 - 18:00',
                ],
            },
        ],
    }

    return (
        <div className={style.sideContents}>
            <h2>부서별 근무현황</h2>
            {/* 하드코딩된 날짜와 아이콘 */}
            <div className={style.week_selector}>
                <i className="bx bx-chevron-left"></i>
                <span>2024-08-12 ~ 2024-08-18</span>
                <i className="bx bx-chevron-right"></i>
            </div>

            <div className={style.attendance_dept}>
                <div className={style.dept_tabs}>
                    {Object.keys(departments).map(dept => (
                        <div
                            key={dept}
                            className={`${style.dept_tab} ${
                                selectedDept === dept ? style.active : ''
                            }`}
                            onClick={() => setSelectedDept(dept)}
                        >
                            {dept}
                        </div>
                    ))}
                </div>

                {/* 요일 헤더 */}
                <div className={style.header_row}>
                    <span>이름</span>
                    <span>월</span>
                    <span>화</span>
                    <span>수</span>
                    <span>목</span>
                    <span>금</span>
                    <span>토</span>
                </div>

                <div className={style.attendance_content}>
                    {departments[selectedDept].map(member => (
                        <div key={member.id} className={style.attendance_row}>
                            <span>{member.name}</span>
                            {member.times.map((time, index) => (
                                <span key={index}>{time}</span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Attendance
