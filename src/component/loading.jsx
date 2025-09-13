import "../component/Css/loading.css";

function Loading() {
  return (
    <div className="loading_page">
      <div className="loading_spinner"></div>
      <div className="loading_text">분석 중</div>
      <div className="loading_text">잠시만 기다려 주세요.</div>
    </div>
  );
}

export default Loading;
