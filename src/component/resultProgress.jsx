import { Flex, Progress } from "antd";

function ResultProgress() {
    return (
        <Flex gap="small" wrap>
            <Progress type="circle" percent={75} width={400} strokeWidth={10} />
        </Flex>
    );
}

export default ResultProgress;