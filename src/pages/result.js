import "../component/Css/result.css";
import ResultProgress from "../component/resultProgress";

import { Link } from "react-router-dom";

function Result() {
    return (
        <div className="result_page">
            <div className="result_content">
                <div className="result_box">
                    <ResultProgress />
                </div>
                <div className="result_box">
                    <div className="result_explanation">
                        Officia est id exercitation mollit id ipsum minim et. Veniam irure do eu et eu do velit magna eiusmod commodo minim cillum tempor eiusmod. Quis duis ut dolor quis voluptate.
                        Officia est id exercitation mollit id ipsum minim et. Veniam irure do eu et eu do velit magna eiusmod commodo minim cillum tempor eiusmod. Quis duis ut dolor quis voluptate.
                    </div>
                    <div className="result_btn_box">
                        <Link to="/" className="result_btn">돌아가기</Link>
                        <Link to="/result-detailed" className="result_btn">자세히 보기</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Result;