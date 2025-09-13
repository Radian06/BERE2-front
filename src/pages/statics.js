import "../component/Css/statics.css";
import Header from "../component/header.jsx";

import { Progress, Card } from "antd";

function Static() {
    const tasks = [
        { name: "쿠팡", value: 80 },
        { name: "11번가", value: 60 },
        { name: "알리익스프레스", value: 50 },
        { name: "G마켓", value: 90 },
        { name: "e마트", value: 90 },
    ];

    return (
        <>
            <Header />
            <div className="statics_page">
                <div className="statics_top_box">
                    <div className="statics_title">통계 정보</div>
                    <div className="statics_description">
                        사용자들이 조회한 데이터를 기반으로 통계 정보를 제공합니다. <br />
                    </div>
                    <div className="statics_description">
                        최신 결과를 반영하여 자동으로 업데이트되므로, 실시간 변화를 확인할 수 있습니다.
                    </div>
                </div>
                <div className="statics_bottom_box">
                    <div className="statics_card_box">
                        {tasks.map((task, index) => (
                            <div className="static_card" key={index}>
                                <Card className="static_card" title={task.name} bordered={false}>
                                    <Progress
                                        percent={task.value}
                                        showInfo={true}
                                        strokeColor={task.value === 100 ? "#3A278B" : "#b4a9e7ff"}
                                    />
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Static;