import "../component/Css/login.css";
import Logo from "../image/logo.png";

function Login() {
    return (
        <div className="login_page">
            <img src={Logo} className="login_logo"></img>
            <input type="text" className="login_input" placeholder="아이디"></input>
            <input type="password" className="login_input" placeholder="비밀번호"></input>
            <button className="login_btn">로그인</button>
            <div className="login_etc_box">
                <div className="login_etc">아이디 찾기</div>
                |
                <div className="login_etc">비밀번호 찾기</div>
                |
                <div className="login_etc">회원가입</div>
            </div>
        </div>
    );
}

export default Login;