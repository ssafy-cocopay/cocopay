import React, { useState } from "react";
import { Background } from "@/components/atoms/Background/Background.styles";
import BlueContainer from "@/components/molecules/BlueContainer/BlueContainer";
import { Text } from "@/components/atoms/Text/Text.styles";
import { Image } from "@/components/atoms/Image/Image";
import search from "@/assets/images/icon-search-blue.png";
import { Line } from "@/components/atoms/Line/Line.style";

import BodyAndHeading from "@/components/molecules/BodyAndHeading/BodyAndHeading";
import BarcodeContainer from "@/components/molecules/BarcodeContainer.tsx/BarcodeContainer";

import {
  HeaderContainer,
  BarcodeWhiteContainer,
  DiscountAndAmountContainer,
  CircleIconContainer,
} from "@/components/atoms/Container/Containers.styles";

const HomePage = () => {
  // TODO: API 요청 -> amount BodyAndHeading에 전달

  // TODO: 바코드값 지금은 임시 하드코딩 - API 요청해야하는지? 여기서 제너레이팅 해야하는지?
  const [barcodeValue] = useState("3873827336732991");

  return (
    <Background
      $colormode="gradient"
      style={{
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <div style={{ position: "absolute", top: 0, width: "100%" }}>
        <BlueContainer></BlueContainer>
      </div>
      <HeaderContainer $left={true}>
        <Text size="subtitle2" fontWeight="bold" color="white" $margin="0 4px">
          현장 결제
        </Text>
        <BarcodeWhiteContainer>
          <DiscountAndAmountContainer $left={true}>
            <BodyAndHeading amountType="할인받은" amount={6750} />
            <Line margin="18px 0" />
            <BodyAndHeading amountType="소비한" amount={273350} />
          </DiscountAndAmountContainer>
          <BarcodeContainer code={barcodeValue} />
          <CircleIconContainer>
            <Image src={search} width={2.5} $margin="auto"></Image>
          </CircleIconContainer>
        </BarcodeWhiteContainer>
      </HeaderContainer>
    </Background>
  );
};

export default HomePage;
