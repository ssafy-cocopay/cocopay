import React from "react"
import { Text } from "@/components/atoms/Text/Text.styles"
import { CardHistoryWrapper } from "./CardHistory.styles"

const CardHistory = () => {
    return (
        <div>
            <CardHistoryWrapper
            margin="0 0 12px 0"
            justifyContent="space-between"
            alignItems="center"
            >
                <Text
                size="body2"
                fontWeight="bold"
                color="black1"
                >
                    이용내역
                </Text>
                <CardHistoryWrapper>
                    <Text
                    size="subtitle2"
                    fontWeight="bold"
                    color="black1"
                    >
                        164,800
                    </Text>
                    <Text
                    size="subtitle2"
                    fontWeight="light"
                    color="black1"
                    >
                        원
                    </Text>
                </CardHistoryWrapper>
            </CardHistoryWrapper>
            <CardHistoryWrapper
            margin="0 0 28px 0"
            justifyContent="space-between"
            alignItems="center"
            >
                <Text
                size="body2"
                fontWeight="bold"
                color="black1"
                >
                    받은혜택
                </Text>
                <CardHistoryWrapper>
                    <Text
                    size="subtitle2"
                    fontWeight="bold"
                    color="blue"
                    >
                        9,348
                    </Text>
                    <Text
                    size="subtitle2"
                    fontWeight="light"
                    color="blue"
                    >
                        원
                    </Text>
                </CardHistoryWrapper>
            </CardHistoryWrapper>
        </div>
    )
}

export default CardHistory;