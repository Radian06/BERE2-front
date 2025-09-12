import "../component/Css/header.css";
import mainLogo from "../image/mainLogo.png";

import { Link } from "react-router-dom";

function Header() {


    return (
        <div className="header_page">
            <Link to="/">
                <img src={mainLogo} alt="main logo" className="header_logo" />
            </Link>
            <div className="header_nav_box">
                <Link to="/reviewCheck" className="header_nav">리뷰 탐지</Link>
                <Link to="/record" className="header_nav">기록 조회</Link>
                <Link to="/statics" className="header_nav">통계 정보</Link>
                <Link to="/login" className="header_nav">로그인</Link>
            </div>
        </div>
    );
}

export default Header;
