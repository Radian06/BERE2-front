import "../component/Css/intro.css";
import Header from "../component/header.jsx";

import { Link } from "react-router-dom";

function Intro() {


    return (
        <>
            <Header />
            <div className="intro_page">
                <div className="intro_left_box">
                    <div className="intro_subTitle">판치는 가짜 리뷰! <br /> 신뢰할 수 있는 리뷰인지 확인해 드립니다.</div>
                    <div className="intro_title">가짜리뷰탐지시스템</div>
                    <div className="intro_btn_box">
                        리뷰 조회하러 가기
                        <Link to="/review-check" className="intro_review_btn">GO!</Link>
                    </div>
                </div>
                <div className="intro_right_box">
                    <div className="intro_square1"></div>
                    <div className="intro_square2"></div>
                    <div className="intro_square3"></div>
                    <div className="intro_square4"></div>
                </div>
            </div>
        </>
    );
}

export default Intro;
