import { useNavigate } from 'react-router-dom'

const SideAbout = () => {
    const navigate = useNavigate()

    const handleAttendanceClick = () => {
        navigate('/attendance')
    }

    const handleVacationClick = () => {
        navigate('/attendancevacation')
    }

    return (
        <div className="sideAbout">
            <div className="sideTxt">
                <h2 className="sideTit">근태관리</h2>
            </div>
            <div className="addressListPrivate">
                <h3 className="toggleTit" onClick={handleAttendanceClick}>
                    부서별 근무현황
                </h3>
            </div>
            <h3 className="toggleTit" onClick={handleVacationClick}>
                부서별 휴가근황
            </h3>
        </div>
    )
}

export default SideAbout
