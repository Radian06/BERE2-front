import "../component/Css/record.css";
import { Pagination } from "antd";

function Record() {
    return (
        <div className="record_page">
            <div className="record_top_container">
                <div className="record_filter_box">
                    <div className="record_filter_group">
                        <label className="record_label">검색 날짜</label>
                        <input type="date" className="record_input"></input>
                        <span className="record_dateSeparator">~</span>
                        <input type="date" className="record_input"></input>
                    </div>
                    <div className="record_filter_group">
                        <div className="record_label">검색 키워드</div>
                        <input type="text" className="record_input" placeholder="원하는 키워드를 입력하세요."></input>
                    </div>
                </div>
                <div className="record_filter_box">
                    <div className="record_filter_group">
                        <div className="record_label">판단 결과</div>
                        <div className="record_score_btn">A</div>
                        <div className="record_score_btn">B</div>
                        <div className="record_score_btn">C</div>
                        <div className="record_score_btn">D</div>
                        <div className="record_score_btn">E</div>
                    </div>
                    <div className="record_filter_group">
                        <div className="record_btn">초기화</div>
                        <div className="record_btn">검색</div>
                    </div>
                </div>
            </div>

            <div className="record_bottom_container">
                <table>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>리뷰 내용 요약</th>
                            <th>판단 결과</th>
                            <th>검색 날짜</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>3</td>
                            <td>리뷰 내용 요약 문구</td>
                            <td>C</td>
                            <td>2025.09.12</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>리뷰 내용 요약 문구</td>
                            <td>B</td>
                            <td>2025.09.11</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>리뷰 내용 요약 문구</td>
                            <td>A</td>
                            <td>2025.09.10</td>
                        </tr>
                    </tbody>
                </table>

                <div className="record_pagination_box">
                    <div className="record_pagination">《</div>
                    <div className="record_pagination">1</div>
                    <div className="record_pagination">2</div>
                    <div className="record_pagination">3</div>
                    <div className="record_pagination">4</div>
                    <div className="record_pagination">5</div>
                    <div className="record_pagination">》</div>
                </div>
            </div>
        </div>
    );
}

export default Record;