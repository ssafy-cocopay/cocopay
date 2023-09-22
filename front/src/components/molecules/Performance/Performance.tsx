import React from "react"
import { Wrapper, Level } from "./Performance.styles";
import { Text } from "@/components/atoms/Text/Text.styles"

const Performance = () => {
    return (
        <Wrapper>
            <Level bgc="lightblue">
                <Text
                size="small2"
                fontWeight="bold"
                color="white"
                style={{textAlign: "center", lineHeight: "26px"}}
                >
                    1
                </Text>
            </Level>
            <Level bgc="grey2">
                <Text
                size="small2"
                fontWeight="bold"
                color="white"
                style={{textAlign: "center", lineHeight: "26px"}} // 어케하누...
                >
                    2
                </Text>
            </Level>
        </Wrapper>
    )
}

export default Performance;