import React, { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Register from './components/Register/Register'
import Mypage from './components/Mypage/Mypage'
import Loading from './commons/Loading/Loading'
import { useAuthStore } from './store/store'
import axios from 'axios'

// axios가 요청을 보낼 때 쿠키값을 포함해서 전송하는 설정
axios.defaults.withCredentials = true

function App() {
    const { setLoginID } = useAuthStore()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // 세션스토리지에서 loginID(세션)을 가져오고,
        const loginID = sessionStorage.getItem('loginID')
        // setLoginID를 호출해서 zustand(저장소)의 loginID를 업데이트 한다
        setLoginID(loginID)
        setIsLoading(false)
    }, [setLoginID])

    if (isLoading) {
        return <Loading />
    } else {
        return (
            <div className="container">
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/employee/register"
                            element={<Register />}
                        />
                        <Route path="/employee/mypage" element={<Mypage />} />
                    </Routes>
                </Router>
            </div>
        )
    }
}

export default App
