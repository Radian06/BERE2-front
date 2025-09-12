import "../component/Css/reviewCheck.css";
import Logo from "../image/logo.png";

function ReviewCheck() {
    return (
        <>
            <Header />
            <div className="RC_page">
                <img src={Logo} alt="" className="RC_logo"></img>
                <div className="RC_title">BEstREview</div>
                <div className="RC_input_box">
                    <input type="text" className="RC_input" placeholder="URL을 입력해 주세요." />
                    <button className="RC_input_btn">조회</button>
                </div>
            </div>
        </>
    );
}

export default ReviewCheck;
