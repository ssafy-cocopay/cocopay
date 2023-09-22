import { Background } from "@/components/atoms/Background/Background.styles";
import React from "react"
import iconChevronLeftGrey from "@/assets/images/icon-chevron-left-grey.png"
import iconChevronRightGrey from "@/assets/images/icon-chevron-right-grey.png"
import { Image } from "@/components/atoms/Image/Image"
import { Text } from "@/components/atoms/Text/Text.styles"
import { Wrapper } from "./Calendar.styles"

const Calendar = () => {
    return (
        <Wrapper>
            <Image
            src={iconChevronLeftGrey}
            width={24}
            height={24}
            $unit="px"
            >
            </Image>
            <Text
            size="body1"
            fontWeight="bold"
            color="black1"
            >
                9월
            </Text>
            <Image
            src={iconChevronRightGrey}
            width={24}
            height={24}
            $unit="px"
            >
            </Image>
        </Wrapper>
    )
}

export default Calendar;