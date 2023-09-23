import React from "react"
import { PerformanceWrapper, Level, BarWrapper } from "./Performance.styles";
import { Text } from "@/components/atoms/Text/Text.styles"

const Performance = () => {
    return (
        <PerformanceWrapper>
            <BarWrapper
            position="relative"
            >
                <Level 
                bgc="lightblue"
                width="28px"
                height="28px"
                position="absolute"
                left="0"
                zIndex="2" // 이 요소를 앞으로 가져옵니다.
                >
                    <Text
                    size="small2"
                    fontWeight="bold"
                    color="white"
                    style={{textAlign: "center", lineHeight: "26px"}}
                    >
                        1
                    </Text>
                </Level>
                <Level 
                bgc="blue"
                width="150px"
                height="28px"
                position="absolute"
                left="0"
                zIndex="1" // 이 요소를 뒤로 보냅니다.
                >
                    <Text
                    size="small2"
                    fontWeight="bold"
                    color="white"
                    style={{textAlign: "center", lineHeight: "26px"}}
                    >
                        353,499원
                    </Text>
                </Level>
            </BarWrapper>
            <Level 
            bgc="grey2"
            width="28px"
            height="28px"
            >
                <Text
                size="small2"
                fontWeight="bold"
                color="white"
                style={{textAlign: "center", lineHeight: "26px"}} // 어케하누...
                >
                    2
                </Text>
            </Level>
        </PerformanceWrapper>
    )
}

export default Performance;