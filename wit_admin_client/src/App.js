import React, { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Loading from './commons/Loading/Loading'
import SideBar from './components/layout/Sidebar'
import Header from './components/common/Header'
import Admin from './pages/Admin'
import Board from './pages/Board'
import Management from './pages/Management'
import Home from './pages/Home'
import EApproval from './pages/EApproval'
import Messenger from './pages/Messenger'
import Calendar from './pages/Calendar'
import Attendance from './pages/Attendance'
import AttendanceVacation from './pages/AttendanceVacation'
import { useAuthStore } from './store/store'
import axios from 'axios'

// axios가 요청을 보낼 때 쿠키값을 포함해서 전송하는 설정
axios.defaults.withCredentials = true

function App() {
    /*
    const { setLoginID } = useAuthStore();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // 세션스토리지에서 loginID(세션)을 가져오고,
        const loginID = sessionStorage.getItem('loginID');
        // setLoginID를 호출해서 zustand(저장소)의 loginID를 업데이트 한다
        setLoginID(loginID);
        setIsLoading(false);
    }, [setLoginID]);

    if (isLoading) {
        return <Loading />;
    } else {*/

    return (
        <Router>
            <div className="container">
                <SideBar />
                <div className="main-content">
                    <Header />
                    <div className="contents">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/admin" element={<Admin />} />
                            <Route path="/board" element={<Board />} />
                            <Route path="/calendar" element={<Calendar />} />
                            <Route
                                path="/eApproval/*"
                                element={<EApproval />}
                            />
                            <Route
                                path="/management"
                                element={<Management />}
                            />
                            <Route path="/messenger" element={<Messenger />} />
                            <Route
                                path="/attendance"
                                element={<Attendance />}
                            />
                            <Route
                                path="/attendancevacation"
                                element={<AttendanceVacation />}
                            />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    )
    /*}*/
}

export default App
