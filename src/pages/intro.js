import "../component/Css/intro.css";

import { Link } from "react-router-dom";

function Intro() {


    return (
        <div className="intro_page">
            <div className="intro_left_box">
                <div className="intro_subTitle">판치는 가짜 리뷰! <br /> 신뢰할 수 있는 리뷰인지 확인해 드립니다.</div>
                <div className="intro_title">가짜리뷰탐지시스템</div>
                <div className="intro_btn_box">
                    리뷰 조회하러 가기
                    <Link to="/reviewCheck" className="intro_review_btn">GO!</Link>
                </div>
            </div>
            <div className="intro_right_box">
                뭐 넣지 여기
            </div>

        </div>
    );
}

export default Intro;
