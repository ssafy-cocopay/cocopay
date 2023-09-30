import React from "react";
import {
  StatisticsBarWrapper,
  BarRateWrapper,
  BarRate,
} from "../StatisticsBar/StatisticsBar.styles";
import { CATEGORY_COLORS, CategoryData } from "@/types/category";

interface StatisticsContentsProps {
  contents: CategoryData[];
}

const StatisticsBar = ({ contents }: StatisticsContentsProps) => {
  const tempAmounts = contents;
  return (
    <>
      <StatisticsBarWrapper>
        <BarRateWrapper>
          {tempAmounts.map((category, index) => {
            return (
              <BarRate
                key={index}
                style={{
                  flexGrow: category.rate,
                  backgroundColor: CATEGORY_COLORS[category.category],
                }}
              ></BarRate>
            );
          })}
        </BarRateWrapper>
      </StatisticsBarWrapper>
    </>
  );
};

export default StatisticsBar;
