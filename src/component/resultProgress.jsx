import { Flex, Progress } from "antd";

function ResultProgress({ percent = 75 }) {
    const strokeColor = percent === 100 ? "#3A278B" : "#b4a9e7ff";

    return (
        <Flex gap="small" wrap>
            <Progress 
                type="circle" 
                percent={percent} 
                width={400} 
                strokeWidth={10} 
                strokeColor={strokeColor} 
            />
        </Flex>
    );
}

export default ResultProgress;
