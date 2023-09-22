import React from "react"
import { Text } from "@/components/atoms/Text/Text.styles"
import { Wrapper } from "./CardHistory.styles"

const CardHistory = () => {
    return (
        <div>
            <Wrapper
            margin="0 0 12px 0"
            >
                <Text
                size="body2"
                fontWeight="bold"
                color="black1"
                >
                    이용내역
                </Text>
                <Text
                size="body2"
                fontWeight="bold"
                color="black1"
                >
                    164,800원
                </Text>
            </Wrapper>
            <Wrapper
            margin="0 0 28px 0"
            >
                <Text
                size="body2"
                fontWeight="bold"
                color="black1"
                >
                    받은혜택
                </Text>
                <Text
                size="body2"
                fontWeight="bold"
                color="blue"
                >
                    9,348원
                </Text>
            </Wrapper>
        </div>
    )
}

export default CardHistory;