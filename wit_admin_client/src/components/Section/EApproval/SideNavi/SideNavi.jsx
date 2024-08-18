import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const SideNavi = () => {
    const location = useLocation() // 현재 URL 경로를 가져옴
    const [activeToggleIndex, setActiveToggleIndex] = useState(null)

    const handleToggleClick = index => {
        setActiveToggleIndex(activeToggleIndex === index ? null : index)
    }

    const isActiveLink = path => location.pathname === path

    return (
        <div className="sideAbout">
            <div className="sideTxt">
                <Link to="/eApproval/home">
                    <h2
                        className={`sideTit ${
                            isActiveLink('/eApproval/home') ? 'active' : ''
                        }`}
                    >
                        전자 결재
                    </h2>
                </Link>
            </div>
            <div className="addressListPrivate">
                <ul className="privateList">
                    <li className="toggleItem">
                        <h3
                            className={`toggleTit ${
                                activeToggleIndex === 0 ? 'active' : ''
                            }`}
                            onClick={() => handleToggleClick(0)}
                        >
                            결재하기
                        </h3>
                        <ul
                            className={`subList ${
                                activeToggleIndex === 0 ? 'active' : ''
                            }`}
                        >
                            <li>
                                <Link
                                    to="/eApproval/apprList/todo"
                                    className={
                                        isActiveLink('/eApproval/apprList/todo')
                                            ? 'active'
                                            : ''
                                    }
                                >
                                    결재 대기 문서
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/eApproval/apprList/upcoming"
                                    className={
                                        isActiveLink(
                                            '/eApproval/apprList/upcoming'
                                        )
                                            ? 'active'
                                            : ''
                                    }
                                >
                                    결재 예정 문서
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="addressListPrivate">
                <ul className="GroupList">
                    <li className="toggleItem">
                        <h3
                            className={`toggleTit ${
                                activeToggleIndex === 1 ? 'active' : ''
                            }`}
                            onClick={() => handleToggleClick(1)}
                        >
                            개인 문서함
                        </h3>
                        <ul
                            className={`subList ${
                                activeToggleIndex === 1 ? 'active' : ''
                            }`}
                        >
                            <li>
                                <Link
                                    to="/eApproval/privateList/appr"
                                    className={
                                        isActiveLink(
                                            '/eApproval/privateList/appr'
                                        )
                                            ? 'active'
                                            : ''
                                    }
                                >
                                    결재 문서함
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/eApproval/privateList/return"
                                    className={
                                        isActiveLink(
                                            '/eApproval/privateList/return'
                                        )
                                            ? 'active'
                                            : ''
                                    }
                                >
                                    반려 문서함
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/eApproval/privateList/view"
                                    className={
                                        isActiveLink(
                                            '/eApproval/privateList/view'
                                        )
                                            ? 'active'
                                            : ''
                                    }
                                >
                                    참조 문서함
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="addressListGroup">
                <ul className="privateList">
                    <li className="toggleItem">
                        <h3
                            className={`toggleTit ${
                                activeToggleIndex === 2 ? 'active' : ''
                            }`}
                            onClick={() => handleToggleClick(2)}
                        >
                            문서 별 문서함
                        </h3>
                        <ul
                            className={`subList ${
                                activeToggleIndex === 2 ? 'active' : ''
                            }`}
                        >
                            <li>
                                <Link
                                    to="/eApproval/docuList/prop"
                                    className={
                                        isActiveLink('/eApproval/docuList/prop')
                                            ? 'active'
                                            : ''
                                    }
                                >
                                    업무 기안
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/eApproval/docuList/leave"
                                    className={
                                        isActiveLink(
                                            '/eApproval/docuList/leave'
                                        )
                                            ? 'active'
                                            : ''
                                    }
                                >
                                    휴가 신청서
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/eApproval/docuList/lateness"
                                    className={
                                        isActiveLink(
                                            '/eApproval/docuList/lateness'
                                        )
                                            ? 'active'
                                            : ''
                                    }
                                >
                                    지각 사유서
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideNavi
