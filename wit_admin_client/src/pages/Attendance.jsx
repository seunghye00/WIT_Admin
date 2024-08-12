import SideAbout from '../components/Section/Attendance/SideAbout'
import Attendance from '../components/Section/Attendance/Attendance'

const AttendancePage = () => {
    return (
        <>
            <SideAbout />
            <div className="sideContents">
                <Attendance />
            </div>
        </>
    )
}

export default AttendancePage
