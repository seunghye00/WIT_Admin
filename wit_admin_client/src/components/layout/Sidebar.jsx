import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import 'boxicons'

const Sidebar = () => {
    return (
        <div className="sideBar">
            <div className="top">
                <i className="bx bx-menu" id="btn" />
            </div>
            <div className="user">
                <img src={logo} alt="Wit Works logo" className="userImg" />
                <div className="nickName">
                    <p className="bold">Wit Works</p>
                    <p></p>
                </div>
            </div>
            <ul>
                <li>
                    <Link to="/employee">
                        {' '}
                        <box-icon name="home-alt-2" />
                        <span className="navItem">홈</span>
                    </Link>{' '}
                    <span className="toolTip">홈</span>
                </li>
                <li>
                    <Link to="/addressbook">
                        {' '}
                        <i className="bx bx-paperclip"></i>{' '}
                        <span className="navItem">주소록</span>
                    </Link>{' '}
                    <span className="toolTip">주소록</span>
                </li>
                <li>
                    <Link to="/board">
                        {' '}
                        <i className="bx bxs-grid-alt"></i>{' '}
                        <span className="navItem">게시판</span>
                    </Link>{' '}
                    <span className="toolTip">게시판</span>
                </li>
                <li>
                    <Link to="/calendar">
                        {' '}
                        <i className="bx bx-calendar-alt"></i>{' '}
                        <span className="navItem">캘린더</span>
                    </Link>{' '}
                    <span className="toolTip">캘린더</span>
                </li>
                <li>
                    <Link to="/messenger">
                        {' '}
                        <i className="bx bxs-message-dots"></i>{' '}
                        <span className="navItem">메신저</span>
                    </Link>{' '}
                    <span className="toolTip">메신저</span>
                </li>
                <li>
                    <Link to="/eApproval">
                        {' '}
                        <i className="bx bx-clipboard"></i>{' '}
                        <span className="navItem">전자결재</span>
                    </Link>{' '}
                    <span className="toolTip">전자결재</span>
                </li>
                <li>
                    <Link to="/attendance">
                        {' '}
                        <i className="bx bxs-briefcase-alt-2"></i>{' '}
                        <span className="navItem">근태관리</span>
                    </Link>
                    <span className="toolTip">근태관리</span>
                </li>
                <li>
                    <Link to="#">
                        {' '}
                        <i className="bx bxs-check-square"></i>{' '}
                        <span className="navItem">예약</span>
                    </Link>{' '}
                    <span className="toolTip">예약</span>
                </li>
                <li>
                    <Link to="#">
                        {' '}
                        <i className="bx bx-sitemap"></i>{' '}
                        <span className="navItem">조직도</span>
                    </Link>{' '}
                    <span className="toolTip">조직도</span>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
