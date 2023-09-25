import React, { useState } from "react";
import styled from "styled-components";
import { Background } from "@/components/atoms/Background/Background.styles";
import { Text } from "@/components/atoms/Text/Text.styles";
import { Image } from "@/components/atoms/Image/Image";
import { Line } from "@/components/atoms/Line/Line.style";
import { Container } from "@/components/atoms/Container/Container.styles";
import search from "@/assets/images/icon-search-blue.png";
import cocoCard from "@/assets/images/img-card-coco.png";
import refresh from "@/assets/images/icon-refresh-grey.png";

import { Checkbox } from "@/pages/Mypage/Mypage.styles";
import BodyAndHeading from "@/components/molecules/BodyAndHeading/BodyAndHeading";
import BlueContainer from "@/components/molecules/BlueContainer/BlueContainer";
import BarcodeContainer from "@/components/molecules/BarcodeContainer.tsx/BarcodeContainer";
import TimerComponent from "@/utils/Timer";

import {
  HeaderContainer,
  BarcodeWhiteContainer,
  DiscountAndAmountContainer,
  CircleIconContainer,
} from "@/components/atoms/Container/Containers.styles";

// const CardImage = styled(Image)`
//   margin-top: 70px;
// `;

const HomePage = () => {
  // TODO: API 요청 -> amount BodyAndHeading에 전달

  // TODO: 바코드값 지금은 임시 하드코딩 - API 요청해야하는지? 여기서 제너레이팅 해야하는지?
  const [barcodeValue] = useState("3873827336732991");

  // TODO: position 지옥에서 벗어나기 ㅠ 밑에 스크롤할 수 있는 카드 컴포넌트 만들기, 캐로셀 사용
  // TODO: 3분 만료랑 새로고침, 서명, 큐알.... 으악 우선순위 좀 정하기
  const ScrollableContainer = styled(Container)`
    overflow-x: auto;
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding-left: 70px;
    margin-top: 200px;
    width: auto;
    position: absolute;
    left: 0px;
  `;

  return (
    <Background
      $colormode="gradient"
      style={{
        minHeight: "100vh",
        position: "fixed",
      }}
    >
      <div style={{ position: "absolute", top: 0, width: "100%" }}>
        <BlueContainer></BlueContainer>
      </div>
      {/* <div style={{ position: "relative" }}> */}
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "10px auto 20px 15px",
              width: "92%",
            }}
          >
            <div
              style={{
                display: "flex",
                // margin: "10px 0",
              }}
            >
              <Text size="small1" color="grey2">
                <TimerComponent />
              </Text>
              <Image
                src={refresh}
                width={1}
                height={1}
                style={{ margin: "2px 0 0 8px" }}
              ></Image>
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <Text size="small1" color="grey2" style={{ marginRight: "10px" }}>
                QR
              </Text>
              <Checkbox type="checkbox" id="toggle" />
            </div>
          </div>
          <CircleIconContainer>
            <Image src={search} width={2.5} $margin="auto"></Image>
          </CircleIconContainer>
        </BarcodeWhiteContainer>

        <ScrollableContainer>
          <Image src={cocoCard} width={15}></Image>
          <Image src={cocoCard} width={15}></Image>
        </ScrollableContainer>
      </HeaderContainer>
    </Background>
  );
};

export default HomePage;
