import React from "react";
import { FourCategoryWrapper } from "./FourCategory.styles";
import CategoryBox from "@/components/organisms/CategoryBox/CategoryBox";

export const FourCategory = ({ StatisticDiscount }: any) => {
  const fourCategory = StatisticDiscount.categoryList.slice(0, 4);
  return (
    <FourCategoryWrapper>
      {fourCategory.map((category: any, index: number) => {
        return (
          <CategoryBox
            key={index}
            num={category.discountPercent}
            category={category.category}
            amount={category.discountAmount}
          ></CategoryBox>
        );
      })}
    </FourCategoryWrapper>
  );
};
