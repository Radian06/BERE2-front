import "../component/Css/login.css";
import Logo from "../image/logo.png";
import Join from "./join.jsx";

import { useState } from "react";

function Login() {
  const [isJoinOpen, setIsJoinOpen] = useState(false);

  return (
    <div className="login_page">
      <img src={Logo} className="login_logo" alt="logo" />
      <input type="text" className="login_input" placeholder="아이디" />
      <input type="password" className="login_input" placeholder="비밀번호" />
      <button className="login_btn">로그인</button>
      <div className="login_etc_box">
        <div className="login_etc">아이디 찾기</div>
        |
        <div className="login_etc">비밀번호 찾기</div>
        |
        <div
          className="login_etc"
          onClick={() => setIsJoinOpen(true)}
          style={{ cursor: "pointer" }}
        >
          회원가입
        </div>
      </div>

      {/* 회원가입 모달 */}
      {isJoinOpen && (
        <div className="header_modal_overlay">
          <div
            className="header_modal_content"
            onClick={(e) => e.stopPropagation()}
          >
            <Join setIsJoinOpen={setIsJoinOpen} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;