import React, { useState } from 'react'
import style from './AttendanceVacation.module.css'
import 'boxicons/css/boxicons.min.css'

const AttendanceVacation = () => {
    const [selectedDept, setSelectedDept] = useState('인사')

    // 부서별 임시 데이터
    const departments = {
        인사: [
            {
                id: 1,
                신청자: '홍길동',
                휴가종류: '연차',
                사용기간: '2024-08-01 ~ 2024-08-03',
                일수: '3일',
            },
            {
                id: 2,
                신청자: '김철수',
                휴가종류: '병가',
                사용기간: '2024-08-10 ~ 2024-08-11',
                일수: '2일',
            },
        ],
        영업: [
            {
                id: 1,
                신청자: '이영업',
                휴가종류: '출산휴가',
                사용기간: '2024-08-05 ~ 2024-08-15',
                일수: '11일',
            },
            {
                id: 2,
                신청자: '박영업',
                휴가종류: '연차',
                사용기간: '2024-08-20 ~ 2024-08-21',
                일수: '2일',
            },
        ],
        IT: [
            {
                id: 1,
                신청자: '최기술',
                휴가종류: '연차',
                사용기간: '2024-08-03 ~ 2024-08-05',
                일수: '3일',
            },
            {
                id: 2,
                신청자: '정기술',
                휴가종류: '병가',
                사용기간: '2024-08-07 ~ 2024-08-09',
                일수: '3일',
            },
        ],
        마케팅: [
            {
                id: 1,
                신청자: '김마케팅',
                휴가종류: '연차',
                사용기간: '2024-08-12 ~ 2024-08-14',
                일수: '3일',
            },
            {
                id: 2,
                신청자: '박마케팅',
                휴가종류: '병가',
                사용기간: '2024-08-18 ~ 2024-08-19',
                일수: '2일',
            },
        ],
        기술지원: [
            {
                id: 1,
                신청자: '이기술',
                휴가종류: '연차',
                사용기간: '2024-08-09 ~ 2024-08-11',
                일수: '3일',
            },
            {
                id: 2,
                신청자: '정기술',
                휴가종류: '병가',
                사용기간: '2024-08-22 ~ 2024-08-23',
                일수: '2일',
            },
        ],
    }

    return (
        <div className={style.sideContents}>
            <h2>부서별 휴가현황</h2>
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

                <div className={style.header_row}>
                    <span>번호</span>
                    <span>신청자</span>
                    <span>휴가종류</span>
                    <span>사용기간</span>
                    <span>일수</span>
                </div>

                <div className={style.attendance_content}>
                    {departments[selectedDept].map(member => (
                        <div key={member.id} className={style.attendance_row}>
                            <span>{member.id}</span>
                            <span>{member.신청자}</span>
                            <span>{member.휴가종류}</span>
                            <span>{member.사용기간}</span>
                            <span>{member.일수}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AttendanceVacation
