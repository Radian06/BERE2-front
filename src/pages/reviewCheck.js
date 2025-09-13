import "../component/Css/reviewCheck.css";
import Logo from "../image/logo.png";
import Header from "../component/header.jsx";
import Loading from "../component/loading.jsx";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ReviewCheck() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const navigate = useNavigate();

    const handleCheck = () => {
        // 로딩 모달 열기
        setIsLoginOpen(true);

        // 2초 후에 result 페이지로 이동 (테스트용)
        setTimeout(() => {
            setIsLoginOpen(false);
            navigate("/result"); 
        }, 2000); 
    };

    return (
        <>
            <Header />
            <div className="RC_page">
                <img src={Logo} alt="" className="RC_logo" />
                <div className="RC_title">BEstREview</div>
                <div className="RC_input_box">
                    <input 
                        type="text" 
                        className="RC_input" 
                        placeholder="URL을 입력해 주세요." 
                    />
                    <button 
                        className="RC_input_btn" 
                        onClick={handleCheck}
                    >
                        조회
                    </button>
                </div>
            </div>

            {/* 로딩 모달 */}
            {isLoginOpen && (
                <div
                    className="header_modal_overlay"
                >
                    <div
                        className="header_modal_content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Loading />
                    </div>
                </div>
            )}
        </>
    );
}

export default ReviewCheck;
