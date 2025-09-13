import "../component/Css/join.css";

function Join() {
    return (
        <div className="join_page">
            <div className="join_title">회원가입</div>
            <input type="text" className="join_input" placeholder="아이디" />
            <input type="password" className="join_input" placeholder="비밀번호" />
            <input type="password" className="join_input" placeholder="비밀번호 확인" />
            <input type="email" className="join_input" placeholder="이메일 (선택)" />
            <label className="join_checkbox_label">
                <input type="checkbox" className="join_checkbox" />
                개인정보약관 동의
            </label>
            <div className="join_btn_box">
                <button className="join_back_btn">가입 취소</button>
                <button className="join_btn">가입하기</button>
            </div>
        </div>
    );
}

export default Join;
