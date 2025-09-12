import "../component/Css/header.css";
import mainLogo from "../image/mainLogo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Login from "../component/login.jsx";

function Header() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    return (
        <div className="header_page">
            <Link to="/">
                <img src={mainLogo} alt="main logo" className="header_logo" />
            </Link>
            <div className="header_nav_box">
                <Link to="/review-check" className="header_nav">리뷰 탐지</Link>
                <Link to="/record" className="header_nav">기록 조회</Link>
                <Link to="/statics" className="header_nav">통계 정보</Link>
                <button 
                    className="header_nav" 
                    onClick={() => setIsLoginOpen(true)}
                >
                    로그인
                </button>
            </div>

            {/* 모달 */}
            {isLoginOpen && (
                <div 
                    className="header_modal_overlay" 
                    onClick={() => setIsLoginOpen(false)}
                >
                    <div 
                        className="header_modal_content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Login />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;
