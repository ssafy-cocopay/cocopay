import React from "react";
import { FourCategoryWrapper } from "./FourCategory.styles";
import CategoryBox from "@/components/organisms/CategoryBox/CategoryBox";

export const FourCategory = (StatisticDiscount: any) => {
  // TODO: API로 상위 카테고리 4개
  const fourCategory = StatisticDiscount.categories;
  console.log(fourCategory);
  return (
    <FourCategoryWrapper>
      {/* TODO: CategoryWhiteBox들 organisms로 빼기 */}
      {/* <CategoryBox></CategoryBox> */}
      {/* {fourCategory.map((category, index) => { */}
        return (
          <CategoryBox
            num={fourCategory.num}
            category={fourCategory.category}
            key={index}
            amount={fourCategory.amount}
          ></CategoryBox>
        );
      })}
    </FourCategoryWrapper>
  );
};
