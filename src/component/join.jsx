import "../component/Css/join.css";

function Join() {
  return (
    <div className="join_page">
      <div className="join_title">회원가입</div>
      <input type="text" className="join_input" placeholder="아이디" />
      <input type="password" className="join_input" placeholder="비밀번호" />
      <input type="password" className="join_input" placeholder="비밀번호 확인" />
      <button className="join_btn">회원가입</button>
    </div>
  );
}

export default Join;
