import React from "react";
import { StatisticsBarWrapper } from "../StatisticsBar/StatisticsBar.styles";
import styled from "styled-components";
import theme from "@/styles/theme";

const BarRateWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const BarRate = styled.div`
  background-color: ${theme.color.black1};
  /* width: 29px; */
  /* height: 100%; */
`;

const tempAmounts = [
  { category: "편의점", price: 94970, rate: 44.7 },
  { category: "영화", price: 82820, rate: 22.8 },
  { category: "문화", price: 64900, rate: 10.0 },
  { category: "배달", price: 34280, rate: 5.3 },
  { category: "카페", price: 24970, rate: 3.8 },
  { category: "대형쇼핑몰", price: 20300, rate: 3.1 },
  { category: "항공", price: 19310, rate: 2.9 },
  { category: "음식점", price: 14970, rate: 2.3 },
  { category: "주유", price: 9200, rate: 1.4 },
  { category: "온라인쇼핑", price: 4130, rate: 0.6 },
  { category: "대중교통", price: 290, rate: 0 },
  { category: "기타", price: 38610, rate: 3.1 },
];


const StatisticsBar = () => {
  return (
    <>
      <StatisticsBarWrapper>
        <BarRateWrapper>
          <BarRate style={{ flexGrow: 33, backgroundColor: "blue" }}></BarRate>
          <BarRate style={{ flexGrow: 22 }}></BarRate>
        </BarRateWrapper>
      </StatisticsBarWrapper>
    </>
  );
};

export default StatisticsBar;
