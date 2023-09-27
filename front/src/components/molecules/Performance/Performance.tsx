import React from "react";
import { PerformanceWrapper, Level, BarWrapper } from "./Performance.styles";
import { Text } from "@/components/atoms/Text/Text.styles";

const Performance = () => {
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
            1
          </Text>
        </Level>
        {/* blue bar */}
        <Level
          $bgc="blue"
          width="100px"
          height="28px"
          $position="absolute"
          $left="0"
          $zIndex="1"
        >
          {/* <Text
            size="small2"
            fontWeight="bold"
            color="white"
            style={{ textAlign: "center", lineHeight: "26px" }}
          >
            353,499원
          </Text> */}
        </Level>
      </BarWrapper>
      {/* 오른쪽 레벨 */}
      <Level $bgc="grey2" width="28px" height="28px">
        <Text
          size="small2"
          fontWeight="bold"
          color="white"
          style={{ textAlign: "center", lineHeight: "26px" }} // 어케하누...
        >
          2
        </Text>
      </Level>
    </PerformanceWrapper>
  );
};

export default Performance;
