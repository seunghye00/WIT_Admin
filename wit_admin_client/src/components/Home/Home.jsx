import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/store' // zustand or your preferred store
import axios from 'axios'
import styles from './Home.module.css'

const Home = () => {
    const { loginID, setLoginID, setMyPage } = useAuthStore()
    const navigate = useNavigate()

    const [auth, setAuth] = useState({ emp_no: '', pw: '' })

    const handleChange = e => {
        const { name, value } = e.target
        setAuth(prev => ({ ...prev, [name]: value }))
    }

    const handleLogin = () => {
        axios
            .post(`http://192.168.24.1/auth`, auth)
            .then(resp => {
                console.log('Login response:', resp)
                if (resp.data) {
                    sessionStorage.setItem('loginID', resp.data)
                    setLoginID(resp.data)
                    navigate('/')
                } else {
                    console.error('Unexpected response format:', resp.data)
                    alert('로그인에 문제가 발생했습니다.')
                }
            })
            .catch(err => {
                console.error('Login failed:', err) // Log the error
                alert('접속 권한이 없습니다 관리자한테 문의 하십시오.')
            })
    }

    const handleLogout = () => {
        axios
            .delete(`http://192.168.24.1/auth`)
            .then(() => {
                sessionStorage.removeItem('loginID')
                setLoginID('')
                navigate('/')
            })
            .catch(err => {
                alert('로그아웃에 실패했습니다.')
            })
    }

    const handleout = () => {
        axios
            .delete(`http://192.168.24.1/member`, { data: { id: loginID } })
            .then(() => {
                handleLogout()
            })
            .catch(err => {
                alert('회원 탈퇴에 실패했습니다.')
            })
    }

    const handleMypage = () => {
        axios
            .get(`http://192.168.24.1/member`, { params: { id: loginID } })
            .then(resp => {
                setMyPage(resp.data)
                navigate('/member/mypage', { state: resp.data })
            })
            .catch(err => {
                alert('마이페이지 정보를 불러오는데 실패했습니다.')
            })
    }

    return (
        <div className={styles['home-container']}>
            {loginID ? (
                // 로그인 후 보여줄 화면
                <div className={styles.welcomeContainer}>
                    <h1>{loginID} 님 환영합니다</h1>
                    <img
                        src="http://192.168.24.1/images/test.jpg"
                        alt="환영 이미지"
                        className={styles.welcomeImage}
                    />
                    <div className={styles.buttonSection}>
                        <button className={styles.tempButton}>임시버튼</button>
                        <button
                            className={styles.pageButton}
                            onClick={handleMypage}
                        >
                            마이페이지
                        </button>
                        <button
                            className={styles.logoutButton}
                            onClick={handleLogout}
                        >
                            로그아웃
                        </button>
                        <button
                            className={styles.deleteButton}
                            onClick={handleout}
                        >
                            회원탈퇴
                        </button>
                    </div>
                </div>
            ) : (
                // 로그인 화면
                <div className={styles.loginContainer}>
                    <div className={styles.header}>로그인</div>
                    <div className={styles.formGroup}>
                        <input
                            type="text"
                            name="emp_no"
                            placeholder="ID"
                            className={styles.inputField}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <input
                            type="password"
                            name="pw"
                            placeholder="PW"
                            className={styles.inputField}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.buttonContainer}>
                        <button
                            className={`${styles.button} ${styles.primaryButton}`}
                            onClick={handleLogin}
                        >
                            로그인
                        </button>
                        <button
                            className={`${styles.button} ${styles.secondaryButton}`}
                            onClick={() => {
                                navigate('/employee/register')
                            }}
                        >
                            회원가입
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Home
