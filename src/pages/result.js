import "../component/Css/result.css";
import ResultProgress from "../component/resultProgress";
import Header from "../component/header.jsx";
import Footer from "../component/footer.jsx";

import { Link } from "react-router-dom";

function Result() {
    return (
        <>
            <Header />
            <div className="result_page">
                <div className="result_content">
                    <div className="result_box">
                        <ResultProgress />
                    </div>
                    <div className="result_box">
                        <div className="result_explantaion_container">
                            <div className="result_title">리뷰 요약</div>
                            <div className="result_explanation">
                                <div className="result_text">은박지가 넉넉한 크기와 적당한 두께라 생선·고기·김치 냉동 보관에 많이 쓰임.<br /></div>
                                <div className="result_text">냄새 차단과 국물 새는 것 방지 효과가 좋아 냉동실 정리와 신선도 유지에 유용하다는 평이 많음.<br /></div>
                                <div className="result_text">가격 대비 용량이 많아 가성비 좋다는 의견이 많아 재구매율이 높음.<br /></div>
                                <div className="result_text">다만 일부는 은박지가 겹쳐 잘 안 떨어지거나 얇다는 아쉬움을 언급.<br /></div>
                                <div className="result_text">총평: 생활 필수템으로 만족도가 높은 제품이라는 평가가 주류임.<br /></div>
                            </div>
                        </div>

                        <div className="result_btn_box">
                            <Link to="/" className="result_back_btn">돌아가기</Link>
                            <Link to="/result-detailed" className="result_btn">자세히 보기</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Result;