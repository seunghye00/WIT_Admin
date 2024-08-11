import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <span className="myName">
                <Link to="">
                    <img src="" alt="프로필 사진" className="userImg" />
                </Link>
                <Link to=""></Link>
            </span>
            <span className="alert">
                <Link to="">
                    <i className="bx bx-bell" />
                </Link>
            </span>
            <span className="logOut">
                <Link to="">
                    <i className="bx bx-log-in" />
                </Link>
            </span>
        </div>
    )
}

export default Header
