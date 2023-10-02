import React from "react";
import { FourCategoryWrapper } from "./FourCategory.styles";
import CategoryBox from "@/components/organisms/CategoryBox/CategoryBox";

export const FourCategory = () => {
  // TODO: API로 상위 카테고리 4개
  const fourCategory = [
    { num: 25.6, category: "카페", amount: 4970 },
    { num: 76, category: "온라인쇼핑", amount: 3220 },
    { num: 49, category: "영화", amount: 970 },
    { num: 24, category: "대중교통", amount: 30 },
  ];

  return (
    <FourCategoryWrapper>
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
    </FourCategoryWrapper>
  );
};
