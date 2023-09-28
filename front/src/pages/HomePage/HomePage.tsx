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
import FlexDiv from "@/components/atoms/FlexDiv/FlexDiv.styles";
import { useGetTotalAmountMonth } from "@/apis/Card/Queries/useGetCard";
import {
  HeaderContainer,
  BarcodeWhiteContainer,
  DiscountAndAmountContainer,
  CircleIconContainer,
} from "@/components/atoms/Container/Containers.styles";

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

export const BlueContainerWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
`;

const BarcodeUnderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px auto 20px 15px;
  width: 92%;
`;

const HomePage = () => {
  // TODO: API 요청 -> amount BodyAndHeading에 전달

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
            <BodyAndHeading amountType="할인받은" amount={TotalAmountMonth.totalDiscountByMonth} />
            <Line $margin="18px 0" />
            <BodyAndHeading amountType="소비한" amount={TotalAmountMonth.totalPayByMonth} />
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
          <Image src={cocoCard} width={15}></Image>
          <Image src={cocoCard} width={15}></Image>
        </ScrollableContainer>
      </HeaderContainer>
    </Background>
  );
};

export default HomePage;
