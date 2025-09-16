import { Flex, Progress } from "antd";

function ResultProgress({ percent = 82 }) {
    const strokeColor = percent === 100 ? "#3A278B" : "#b4a9e7ff";

    /**
     * 등급 표시
     */
    const getGrade = (p) => {
        if (p >= 90) return "A";
        if (p >= 80) return "B";
        if (p >= 70) return "C";
        if (p >= 60) return "D";
        return "F";
    };

    return (
        <Flex gap="small" wrap>
            <Progress
                type="circle"
                percent={percent}
                width={400}
                strokeWidth={10}
                strokeColor={strokeColor}
                format={() => <span style={{
                    fontSize: "28vh", 
                    color: "#333333", 
                    display: "inline-block",
                    transform: "translateY(-6%)"
                }}>{getGrade(percent)}</span>}
            />
        </Flex>
    );
}

export default ResultProgress;
