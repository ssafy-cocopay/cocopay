import React from "react"
import iconChevronLeftGrey from "@/assets/images/icon-chevron-left-grey.png"
import iconChevronRightGrey from "@/assets/images/icon-chevron-right-grey.png"
import { Image } from "@/components/atoms/Image/Image"
import { Text } from "@/components/atoms/Text/Text.styles"
import { Wrapper } from "./Calendar.styles"
import iconCalender from "@/assets/images/icon-calendar.png"

interface CalendarProps {
    onMonthClick?: () => void; // 선택적 props로 onMonthClick 추가
  }

  const Calendar = ({ onMonthClick }: CalendarProps) => {
    return (
        <Wrapper>
            <Image src={iconChevronLeftGrey} width={24} height={24} $unit="px" />
            {/* 여기에서 onMonthClick을 Text의 onClick으로 연결 */}
            <div style={{display:"flex", alignItems:"center"}}>
                <Text size="body1" fontWeight="bold" color="black1" >
                    9월
                </Text>
                <Image onClick={onMonthClick} src={iconCalender} width={20} height={20} $unit="px" $margin="0 0 0 8px" />
            </div>
            <Image src={iconChevronRightGrey} width={24} height={24} $unit="px" />
        </Wrapper>
    );
}

export default Calendar;