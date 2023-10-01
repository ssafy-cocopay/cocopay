import React from "react";
import { PerformanceWrapper, Level, BarWrapper } from "./Performance.styles";
import { Text } from "@/components/atoms/Text/Text.styles";
import { CardDetail } from "@/types/card";


interface CardPerformanceProps {
  Performance: CardDetail
}

const Performance = ({ Performance }: CardPerformanceProps) => {
  console.log(Performance.percent)
  return (
    <PerformanceWrapper>
      {/* 회색 바 */}
      <BarWrapper $position="relative">
        {/* 왼쪽 레벨 */}
        <Level
          $bgc="lightblue"
          width="28px"
          height="28px"
          $position="absolute"
          $left="0"
          $zIndex="2"
        >
          <Text
            size="small2"
            fontWeight="bold"
            color="white"
            style={{ textAlign: "center", lineHeight: "26px" }}
          >
            {Performance.level}
          </Text>
        </Level>
        {/* blue bar */}
        <Level
          $bgc="blue"
          width={`${Performance.percent}%`}
          height="28px"
          $position="absolute"
          $left="0"
          $zIndex="1"
        >
        </Level>
      </BarWrapper>
      {/* 오른쪽 레벨 */}
      <Level $bgc="grey2" width="28px" height="28px" $zIndex="2">
        <Text
          size="small2"
          fontWeight="bold"
          color="white"
          style={{ textAlign: "center", lineHeight: "26px" }} // 어케하누...
        >
          {Performance.nextLevel}
        </Text>
      </Level>
    </PerformanceWrapper>
  );
};

export default Performance;
