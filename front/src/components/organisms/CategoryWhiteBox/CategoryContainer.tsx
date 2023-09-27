import React from "react";
import { CategoryWhiteBox } from "@/pages/StatisticsPage/StatisticsPage.styles";
import { CategoryContainerWrapper } from "./CategoryContainer.styles";
import CategoryBox from "@/components/organisms/CategoryBox/CategoryBox";

export const CategoryContainer = () => {
  // TODO: API로 상위 카테고리 4개
  const fourCategory = [
    { num: 89, category: "주유", amount: 4970 },
    { num: 76, category: "온라인쇼핑", amount: 3220 },
    { num: 49, category: "영화", amount: 970 },
    { num: 24, category: "대중교통", amount: 30 },
  ];

  return (
    <CategoryContainerWrapper>
      {/* TODO: CategoryWhiteBox들 organisms로 빼기 */}
      {/* <CategoryBox></CategoryBox> */}
      {fourCategory.map((category, index) => {
        return (
          <CategoryBox
            num={category.num}
            category={category.category}
            key={index}
            amount={category.amount}
          ></CategoryBox>
        );
      })}
    </CategoryContainerWrapper>
  );
};
