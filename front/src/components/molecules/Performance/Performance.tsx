import React from "react";
import { PerformanceWrapper, Level, BarWrapper } from "./Performance.styles";
import { Text } from "@/components/atoms/Text/Text.styles";
import { CardDetail, OfflinePay } from "@/types/card";

interface CardPerformanceProps {
  data: CardDetail | OfflinePay;
  dataType: 'cardDetail' | 'offlinePay';
}

const Performance = ({ data, dataType }: CardPerformanceProps) => {
  const cardData = data as CardDetail;
  const offlineData = data as OfflinePay;

  return (
    <PerformanceWrapper>
      {dataType === 'cardDetail' && (
        <BarWrapper $position="relative">
          <Level $bgc="lightblue" width="28px" height="28px" $position="absolute" $left="0" $zIndex="2">
            <Text size="small2" fontWeight="bold" color="white" style={{ textAlign: "center", lineHeight: "26px" }}>
              {cardData.level}
            </Text>
          </Level>
          <Level $bgc="blue" width={`${cardData.percent}%`} height="28px" $position="absolute" $left="0" $zIndex="1" />
          <Level $bgc="grey2" width="28px" height="28px" $zIndex="2">
            <Text size="small2" fontWeight="bold" color="white" style={{ textAlign: "center", lineHeight: "26px" }}>
              {cardData.nextLevel}
            </Text>
          </Level>
        </BarWrapper>
      )}
      {dataType === 'offlinePay' && (
        <BarWrapper $position="relative">
          <Level $bgc="lightblue" width="28px" height="28px" $position="absolute" $left="0" $zIndex="2">
            <Text size="small2" fontWeight="bold" color="white" style={{ textAlign: "center", lineHeight: "26px" }}>
              {offlineData.nextPerLevel  - 1}
            </Text>
          </Level>
          <Level $bgc="blue" width={`${parseInt(offlineData.graphRate)}%`} height="28px" $position="absolute" $left="0" $zIndex="1" />
          <Level $bgc="grey2" width="28px" height="28px" $zIndex="2">
            <Text size="small2" fontWeight="bold" color="white" style={{ textAlign: "center", lineHeight: "26px" }}>
              {offlineData.nextPerLevel}
            </Text>
          </Level>
        </BarWrapper>
      )}
    </PerformanceWrapper>
  );
};

export default Performance;
