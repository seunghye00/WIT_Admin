import React from 'react'
import styles from './Mypage.module.css'
import { useLocation } from 'react-router-dom'

const Mypage = () => {
    const loc = useLocation()
    const myPage = loc.state

    return (
        <div className={styles.Mypage}>
            <h2>마이페이지</h2>
            <div>ID: {myPage.id}</div>
            <div>Name: {myPage.name}</div>
        </div>
    )
}

export default Mypage
