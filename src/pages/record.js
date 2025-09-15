import "../component/Css/record.css";
import Header from "../component/header.jsx";
import Footer from "../component/footer.jsx";

import { useState } from "react";

function Record() {
    // state 관리
    const [selectedScores, setSelectedScores] = useState([]);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [keyword, setKeyword] = useState("");

    /**
     * 검색 함수
     */
    const handleSearch = () => {
        const filtered = initialData.filter((item) => {
            const itemDate = new Date(item.date);
            const start = startDate ? new Date(startDate) : null;
            const end = endDate ? new Date(endDate) : null;

            const isDateInRange =
                (!start || itemDate >= start) &&
                (!end || itemDate <= end);

            const isKeywordMatch = !keyword || item.summary.includes(keyword);
            const isScoreMatch = selectedScores.length === 0 || selectedScores.includes(item.score);

            return isDateInRange && isKeywordMatch && isScoreMatch;
        });
        setTableData(filtered);
    };

    /**
     * 등급 선택 함수
     */
    const handleScoreClick = (score) => {
        if (selectedScores.includes(score)) {
            setSelectedScores(selectedScores.filter((s) => s !== score));
        } else {
            setSelectedScores([...selectedScores, score]);
        }
    };

    const scores = ["A", "B", "C", "D", "E"];

    /**
     * 초기화 함수
     */
    const handleReset = () => {
        setSelectedScores([]);
        setStartDate("");
        setEndDate("");
        setKeyword("");
        setTableData(initialData);
    };

    // tbody 관리
    const initialData = [
        { id: 5, summary: "리뷰 내용 요약 문구", score: "E", date: "2025-09-12" },
        { id: 4, summary: "리뷰 내용 요약 문구", score: "D", date: "2025-09-11" },
        { id: 3, summary: "리뷰 내용 요약 문구", score: "C", date: "2025-09-10" },
        { id: 2, summary: "리뷰 내용 요약 문구", score: "B", date: "2025-09-09" },
        { id: 1, summary: "리뷰 내용 요약 문구", score: "A", date: "2025-09-08" },
    ];

    const [tableData, setTableData] = useState(initialData);

    return (
        <>
            <Header />
            <div className="record_page">
                <div className="record_top_container">
                    <div className="record_filter_box">
                        <div className="record_filter_group">
                            <label className="record_label">검색 날짜</label>
                            <input
                                type="date"
                                className="record_input"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                            />
                            <span className="record_dateSeparator">~</span>
                            <input
                                type="date"
                                className="record_input"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                            />
                        </div>
                        <div className="record_filter_group">
                            <div className="record_label">검색 키워드</div>
                            <input
                                type="text"
                                className="record_keyword_input"
                                placeholder="원하는 키워드를 입력하세요."
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="record_filter_box">
                        <div className="record_filter_group">
                            <div className="record_label">판단 결과</div>
                            {scores.map((score) => (
                                <div
                                    key={score}
                                    className={`record_score_btn ${selectedScores.includes(score) ? "selected" : ""}`}
                                    onClick={() => handleScoreClick(score)}
                                >
                                    {score}
                                </div>
                            ))}
                        </div>
                        <div className="record_filter_group">
                            <div className="record_undo_btn" onClick={handleReset}>초기화</div>
                            <div className="record_btn" onClick={handleSearch}>검색</div>
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
                            {tableData.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.summary}</td>
                                    <td>{item.score}</td>
                                    <td>{item.date}</td>
                                </tr>
                            ))}
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
            <Footer />
        </>
    );
}

export default Record;