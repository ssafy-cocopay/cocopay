import React, { useState } from "react";
import { Background } from "@/components/atoms/Background/Background.styles";
import { Text } from "@/components/atoms/Text/Text.styles";
import { Image } from "@/components/atoms/Image/Image";
import { Line } from "@/components/atoms/Line/Line.style";
import search from "@/assets/images/icon-search-blue.png";
import cocoCard from "@/assets/images/img-card-coco.png";
import refresh from "@/assets/images/icon-refresh-grey.png";
import { useGetMainCards } from "@/apis/Card/Queries/useGetMainCards";

import {
  BlueContainerWrapper,
  BarcodeUnderWrapper,
  ScrollableContainer,
} from "@/pages/HomePage/HomePage.styles";

import { Checkbox } from "@/pages/Mypage/Mypage.styles";
import BodyAndHeading from "@/components/molecules/BodyAndHeading/BodyAndHeading";
import BlueContainer from "@/components/molecules/BlueContainer/BlueContainer";
import BarcodeContainer from "@/components/molecules/BarcodeContainer.tsx/BarcodeContainer";
import TimerComponent from "@/utils/Timer";
import FlexDiv from "@/components/atoms/FlexDiv/FlexDiv.styles";
import { useGetTotalAmountMonth } from "@/apis/Card/Queries/useGetCard";
import {
  HeaderContainer,
  BarcodeWhiteContainer,
  DiscountAndAmountContainer,
  CircleIconContainer,
} from "@/components/atoms/Container/Containers.styles";
import { MainCard } from "@/types/card";

const HomePage = () => {
  // TODO: API 요청 -> amount BodyAndHeading에 전달
  const MainCards = useGetMainCards();
  console.log(MainCards, "mainCards");
  
  MainCards.map((card: MainCard) => {
    console.log(card.cardImage);
  });

  // TODO: 바코드값 지금은 임시 하드코딩
  const [barcodeValue] = useState("3873827336732991");

  // TODO: 밑에 스크롤할 수 있는 카드 컴포넌트 만들기, 캐로셀 사용
  // TODO: 3분 만료랑 새로고침, 큐알....
  const TotalAmountMonth = useGetTotalAmountMonth();

  return (
    <Background
      $colormode="gradient"
      style={{
        position: "fixed",
      }}
    >
      <BlueContainerWrapper>
        <BlueContainer />
      </BlueContainerWrapper>
      <HeaderContainer $left={true}>
        <Text size="subtitle2" fontWeight="bold" color="white" $margin="0 4px">
          현장 결제
        </Text>
        <BarcodeWhiteContainer>
          <DiscountAndAmountContainer $left={true}>
            <BodyAndHeading
              amountType="할인받은"
              amount={
                TotalAmountMonth ? TotalAmountMonth.totalDiscountByMonth : 0
              }
            />
            <Line $margin="18px 0" />
            <BodyAndHeading
              amountType="소비한"
              amount={TotalAmountMonth ? TotalAmountMonth.totalPayByMonth : 0}
            />
          </DiscountAndAmountContainer>
          <BarcodeContainer code={barcodeValue} />
          <BarcodeUnderWrapper>
            <FlexDiv>
              <TimerComponent />
              <Image
                src={refresh}
                width={1}
                height={1}
                style={{ margin: "2px 0 0 8px" }}
              ></Image>
            </FlexDiv>
            <FlexDiv>
              <Text size="small1" color="grey2" style={{ marginRight: "10px" }}>
                QR
              </Text>
              <Checkbox type="checkbox" id="toggle" />
            </FlexDiv>
          </BarcodeUnderWrapper>
          <CircleIconContainer>
            <Image src={search} width={2.5} $margin="auto"></Image>
          </CircleIconContainer>
        </BarcodeWhiteContainer>
        <ScrollableContainer>
          {MainCards &&
            MainCards.map((card: MainCard) => (
              <Image key={card.id} src={card.cardImage} width={15}></Image>
            ))}
        </ScrollableContainer>
      </HeaderContainer>
    </Background>
  );
};

export default HomePage;
