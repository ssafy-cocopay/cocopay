import React from "react";
import styled from "styled-components";

import { Wrapper } from "@/pages/CardDetailPage/CardDetailPage.styles";
import { Image } from "@/components/atoms/Image/Image";
import { Text } from "@/components/atoms/Text/Text.styles";
import { CategoryWhiteBox } from "@/pages/StatisticsPage/StatisticsPage.styles";

import gauge0 from "@/assets/images/img-gauge-0to10.png";
import gauge1 from "@/assets/images/img-gauge-10to20.png";
import gauge2 from "@/assets/images/img-gauge-20to30.png";
import gauge3 from "@/assets/images/img-gauge-30to40.png";
import gauge4 from "@/assets/images/img-gauge-40to50.png";
import gauge5 from "@/assets/images/img-gauge-50to60.png";
import gauge6 from "@/assets/images/img-gauge-60to70.png";
import gauge7 from "@/assets/images/img-gauge-70to80.png";
import gauge8 from "@/assets/images/img-gauge-80to90.png";
import gauge9 from "@/assets/images/img-gauge-90to100.png";

import cafeImg from "@/assets/images/img-category-cafe.png";
import convenientImg from "@/assets/images/img-category-convenient.png";
import cultureImg from "@/assets/images/img-category-culture.png";
import deliveryImg from "@/assets/images/img-category-delivery.png";
import flightImg from "@/assets/images/img-category-flight.png";
import foodImg from "@/assets/images/img-category-food.png";
import martImg from "@/assets/images/img-category-mart.png";
import movieImg from "@/assets/images/img-category-movie.png";
import oilImg from "@/assets/images/img-category-oil.png";
import onlineShoppingImg from "@/assets/images/img-category-onlineShopping.png";
import transportImg from "@/assets/images/img-category-transport.png";
import numberToAmount from "@/utils/NumToAmount";

export interface CategoryBoxProps {
  key: number;
  num: number;
  category: string;
  amount: number;
}

const getCategoryGauge = (num: number) => {
  if (num < 10) return gauge0;
  if (num < 20) return gauge1;
  if (num < 30) return gauge2;
  if (num < 40) return gauge3;
  if (num < 50) return gauge4;
  if (num < 60) return gauge5;
  if (num < 70) return gauge6;
  if (num < 80) return gauge7;
  if (num < 90) return gauge8;
  return gauge9;
};

const getCategoryImgSrc = (category: string) => {
  if (category === "카페") return cafeImg;
  if (category === "편의점") return convenientImg;
  if (category === "문화") return cultureImg;
  if (category === "배달") return deliveryImg;
  if (category === "항공") return flightImg;
  if (category === "음식점") return foodImg;
  if (category === "대형쇼핑몰") return martImg;
  if (category === "영화") return movieImg;
  if (category === "주유") return oilImg;
  if (category === "온라인쇼핑") return onlineShoppingImg;
  if (category === "대중교통") return transportImg;
  return gauge9;
};

const CategoryTextBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  margin-top: 68px;
`;

const CategoryBox = (props: CategoryBoxProps) => {
  const gauge = getCategoryGauge(props.num);
  const categoryImg = getCategoryImgSrc(props.category);

  return (
    <CategoryWhiteBox>
      <Image src={gauge} width={5}></Image>
      <Image
        src={categoryImg}
        width={4}
        style={{ position: "relative", top: "-70px" }}
      ></Image>

      <CategoryTextBoxWrapper>
        <Text size="small2">{props.category}</Text>
        <Text size="small3" fontWeight="light" color="grey1" $marginTop="2px">
          {numberToAmount(props.amount)}원
        </Text>
      </CategoryTextBoxWrapper>
    </CategoryWhiteBox>
  );
};

export default CategoryBox;
