import React from "react";
import { CategoryData } from "@/types/category";
import { Image } from "@/components/atoms/Image/Image";
import { Text } from "react-native-svg";

import convenientIcon from "@/assets/images/icon-circle-convenient.png";
import movieIcon from "@/assets/images/icon-circle-movie.png";
import cultureIcon from "@/assets/images/icon-circle-culture.png";
import deilveryIcon from "@/assets/images/icon-circle-delivery.png";
import cafeIcon from "@/assets/images/icon-circle-cafe.png";
import martIcon from "@/assets/images/icon-circle-mart.png";
import flightIcon from "@/assets/images/icon-circle-flight.png";
import foodIcon from "@/assets/images/icon-circle-food.png";
import oilIcon from "@/assets/images/icon-circle-oil.png";
import onlineShoppingIcon from "@/assets/images/icon-circle-onlineShopping.png";
import transportIcon from "@/assets/images/icon-circle-transport.png";
import etcIcon from "@/assets/images/icon-circle-etc.png";

// TODO: 얘는 상위에서 주기
const tempAmounts: CategoryData[] = [
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

const StatisticsContents = () => {
  return (
    <>
      {tempAmounts.map((category, index) => {
        return (
          <>
            <Image key={index} src={convenientIcon}></Image>
            <Text>category.category</Text>
          </>
        );
      })}
    </>
  );
};

export default StatisticsContents;
