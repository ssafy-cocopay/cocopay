import React from "react";
import iconChevronLeftGrey from "@/assets/images/icon-chevron-left-grey.png";
import iconChevronRightGrey from "@/assets/images/icon-chevron-right-grey.png";
import { Image } from "@/components/atoms/Image/Image";
import { Text } from "@/components/atoms/Text/Text.styles";
import { Wrapper } from "./Calendar.styles";

interface CalendarProps {
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Calendar = ({ onClick }: CalendarProps) => {
  return (
    <Wrapper onClick={onClick}>
      <Image
        src={iconChevronLeftGrey}
        width={24}
        height={24}
        $unit="px"
      ></Image>
      <Text
        size="body1"
        fontWeight="bold"
        color="black1"
        style={{ lineHeight: "22px" }}
      >
        9월
      </Text>
      <Image
        src={iconChevronRightGrey}
        width={24}
        height={24}
        $unit="px"
      ></Image>
    </Wrapper>
  );
};

export default Calendar;
