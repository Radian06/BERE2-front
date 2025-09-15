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
                                Officia est id exercitation mollit id ipsum minim et. Veniam irure do eu et eu do velit magna eiusmod commodo minim cillum tempor eiusmod. Quis duis ut dolor quis voluptate.
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