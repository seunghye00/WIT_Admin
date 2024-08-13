import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import style from './Attendance.module.css'
import 'boxicons/css/boxicons.min.css'

// Attendance 컴포넌트 정의
const Attendance = () => {
    // 부서 선택 상태 및 초기화
    const [selectedDept, setSelectedDept] = useState('인사부')
    // 현재 주차 상태 및 초기화
    const [currentWeek, setCurrentWeek] = useState(getCurrentWeek())
    // 출석 데이터 상태 및 초기화
    const [attendanceData, setAttendanceData] = useState([])

    // 요일 이름과 날짜를 매핑하는 헬퍼 함수
    const mapDayToDate = workDate => {
        // 날짜 객체 생성
        const date = new Date(workDate)
        // 요일 인덱스 추출
        const dayIndex = date.getDay()
        // 요일 배열
        const days = ['월', '화', '수', '목', '금', '토']
        // 인덱스에 해당하는 요일 이름 반환
        return days[dayIndex]
    }

    // 출석 데이터를 가져오는 함수
    const fetchAttendanceData = useCallback(() => {
        axios
            .get('http://192.168.24.1/attendance/deptAtd', {
                params: {
                    // 선택된 부서
                    deptTitle: selectedDept,
                    // 주의 시작 날짜
                    startDate: currentWeek.startDate,
                    // 주의 종료 날짜
                    endDate: currentWeek.endDate,
                },
            })
            .then(resp => {
                console.log('Attendance data response:', JSON.stringify(resp))

                if (resp.data && Array.isArray(resp.data)) {
                    // 데이터 필드 이름을 소문자로 변환하여 정규화
                    const normalizedData = resp.data.map(member => {
                        const normalizedMember = {}
                        for (const key in member) {
                            // 키를 소문자로 변환
                            normalizedMember[key.toLowerCase()] = member[key]
                        }
                        return normalizedMember
                    })

                    // 직원별로 데이터를 그룹화하여 요일별로 정리
                    const groupedData = normalizedData.reduce((acc, record) => {
                        // 직원 이름
                        const empName = record.empname
                        // 날짜에 해당하는 요일 추출
                        const day = mapDayToDate(record.workdate)

                        if (!acc[empName]) {
                            acc[empName] = {
                                empname: empName,
                                roletitle: record.roletitle,
                                // 각 요일에 대한 기본값 설정
                                workHoursByDay: {
                                    월: 'N/A',
                                    화: 'N/A',
                                    수: 'N/A',
                                    목: 'N/A',
                                    금: 'N/A',
                                    토: 'N/A',
                                },
                            }
                        }

                        // 요일별 출퇴근 시간을 기록
                        if (acc[empName].workHoursByDay) {
                            acc[empName].workHoursByDay[day] = `${
                                record.starttime || 'N/A'
                            } - ${record.endtime || 'N/A'}`
                        }

                        return acc
                    }, {})

                    // 최종 정리된 데이터를 상태로 설정
                    setAttendanceData(Object.values(groupedData))
                } else {
                    console.error('Unexpected response format:', resp.data)
                    alert('데이터를 가져오는데 문제가 발생했습니다.')
                }
            })
            .catch(err => {
                console.error('Failed to fetch attendance data:', err)
                alert('데이터를 가져오는데 문제가 발생했습니다.')
            })
        // selectedDept와 currentWeek 변경에 반응
    }, [selectedDept, currentWeek])

    // 컴포넌트가 렌더링될 때마다 데이터를 가져옴
    useEffect(() => {
        fetchAttendanceData()
    }, [fetchAttendanceData])

    // 주차 변경 함수 (이전 주 또는 다음 주로 변경)
    const handleWeekChange = direction => {
        const newWeek =
            direction === 'next'
                ? // 다음 주로 설정
                  getNextWeek(currentWeek)
                : // 이전 주로 설정
                  getPreviousWeek(currentWeek)
        // 새로운 주차로 상태 업데이트
        setCurrentWeek(newWeek)
    }

    // UI 렌더링
    return (
        <div className={style.sideContents}>
            <h2>부서별 근무현황</h2>
            <div className={style.week_selector}>
                <i
                    className="bx bx-chevron-left"
                    // 이전 주 버튼 클릭 시
                    onClick={() => handleWeekChange('prev')}
                ></i>
                <span>
                    {currentWeek.startDate} ~ {currentWeek.endDate}{' '}
                    {/* 현재 주의 날짜 표시 */}
                </span>
                <i
                    className="bx bx-chevron-right"
                    // 다음 주 버튼 클릭 시
                    onClick={() => handleWeekChange('next')}
                ></i>
            </div>

            <div className={style.attendance_dept}>
                <div className={style.dept_tabs}>
                    {/* 부서 선택 탭 */}
                    {['인사부', '영업부', 'IT부', '마케팅부', '기술지원부'].map(
                        dept => (
                            <div
                                key={dept}
                                className={`${style.dept_tab} ${
                                    selectedDept === dept ? style.active : ''
                                }`}
                                // 부서 선택 시
                                onClick={() => setSelectedDept(dept)}
                            >
                                {dept}
                            </div>
                        )
                    )}
                </div>
                <div className={style.header_row}>
                    <span>이름</span>
                    {/* 요일 헤더 */}
                    {['월', '화', '수', '목', '금', '토'].map(day => (
                        <span key={day}>{day}</span>
                    ))}
                </div>
                <div className={style.attendance_content}>
                    {/* 직원별 근무 시간 표시 */}
                    {attendanceData.map((member, memberIndex) => (
                        <div
                            key={member?.empno || memberIndex}
                            className={style.attendance_row}
                        >
                            <span>{`${member.roletitle} ${member.empname}`}</span>
                            {['월', '화', '수', '목', '금', '토'].map(
                                (day, index) => (
                                    <span key={index}>
                                        {member.workHoursByDay &&
                                            member.workHoursByDay[day]}{' '}
                                        {/* 각 요일의 출퇴근 시간 표시 */}
                                    </span>
                                )
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

// 현재 주의 시작 날짜와 종료 날짜를 계산하는 함수
const getCurrentWeek = () => {
    // 오늘 날짜 객체 생성
    const today = new Date()
    // 오늘의 요일 인덱스 추출
    const day = today.getDay()
    const monday = new Date(today)
    // 월요일로 설정
    monday.setDate(today.getDate() - (day === 0 ? 6 : day - 1))
    const saturday = new Date(monday)
    // 토요일로 설정
    saturday.setDate(monday.getDate() + 5)

    return {
        // 주의 시작 날짜 (월요일)
        startDate: monday.toISOString().split('T')[0],
        // 주의 종료 날짜 (토요일)
        endDate: saturday.toISOString().split('T')[0],
    }
}

// 다음 주의 시작 날짜와 종료 날짜를 계산하는 함수
const getNextWeek = currentWeek => {
    const startDate = new Date(currentWeek.startDate)
    const endDate = new Date(currentWeek.endDate)

    // 다음 주로 설정
    startDate.setDate(startDate.getDate() + 7)
    endDate.setDate(endDate.getDate() + 7)

    return {
        startDate: startDate.toISOString().split('T')[0],
        endDate: endDate.toISOString().split('T')[0],
    }
}

// 이전 주의 시작 날짜와 종료 날짜를 계산하는 함수
const getPreviousWeek = currentWeek => {
    const startDate = new Date(currentWeek.startDate)
    const endDate = new Date(currentWeek.endDate)

    // 이전 주로 설정
    startDate.setDate(startDate.getDate() - 7)
    endDate.setDate(endDate.getDate() - 7)

    return {
        startDate: startDate.toISOString().split('T')[0],
        endDate: endDate.toISOString().split('T')[0],
    }
}

export default Attendance
