import React, { useState } from "react";
import { Background } from "@/components/atoms/Background/Background.styles";
import BlueContainer from "@/components/molecules/BlueContainer/BlueContainer";
import { Text } from "@/components/atoms/Text/Text.styles";
import { Container } from "@/components/atoms/Container/Container.styles";
import { Image } from "@/components/atoms/Image/Image";
import search from "@/assets/images/icon-search-blue.png";
import { Line } from "@/components/atoms/Line/Line.style";
import BodyAndHeading from "@/components/molecules/BodyAndHeading/BodyAndHeading";
import Barcode from "react-barcode";

// 바코드 4글자마다 하이픈 끼워넣기
export const formatBarcode = (input: string): string => {
  return input.replace(/(\d{4})(?=\d)/g, "$1-");
};

const HomePage = () => {
  // TODO: API 요청 -> amount BodyAndHeading에 전달

  // TODO: 바코드값 지금은 임시 하드코딩 - API 요청해야하는지? 여기서 제너레이팅 해야하는지?
  const [barcodeValue, setBarcodeValue] = useState("3873827336732991");

  // TODO: 이거 QR에도 적용 가능?
  const formattedBarcode = formatBarcode(barcodeValue);

  return (
    <Background
      $colormode="gradient"
      style={{
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <BlueContainer></BlueContainer>
      <Container
        $marginTop="12px"
        $padding="30px"
        $left={true}
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <Text size="subtitle2" fontWeight="bold" color="white" $margin="0 4px">
          현장 결제
        </Text>
        {/* 바코드 있는 white 컨테이너 */}
        <Container
          $marginTop="36px"
          $backgroundColor="white"
          $borderRadius="38px"
          height="388px"
          $left={true}
          style={{ position: "relative", top: "80px" }}
        >
          {/* 할인받은 & 소비한 금액, */}
          <Container
            $backgroundColor="white"
            $borderRadius="38px"
            height="230px"
            $boxShadow="shadow1"
            width="85%"
            $paddingTop="36px"
            $left={true}
            style={{ position: "absolute", top: "-80px" }}
          >
            <BodyAndHeading amountType="할인받은" amount={6750} />
            <Line margin="18px 0" />
            <BodyAndHeading amountType="소비한" amount={273350} />
          </Container>

          {/* 바코드 */}
          <Container
            $marginTop="180px"
            $padding="0 10px"
          >
            <Text size="small1" color="grey1">
              {formattedBarcode}
            </Text>
            <div
              style={{
                borderRadius: "15px",
                overflow: "hidden",
                width: "100%",
                marginTop: "10px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Barcode
                value={barcodeValue}
                format="CODE128"
                width={2.2}
                displayValue={false}
                margin={0}
                height={113}
                lineColor="#303030"
              />
            </div>
          </Container>

          {/* White Circle */}
          <Container
            $backgroundColor="white"
            $borderRadius="100%"
            height="76px"
            width="76px"
            $boxShadow="shadow1"
            $padding="0"
            style={{ position: "absolute", top: "-115px", right: "0" }}
          >
            <Image src={search} width={2.5} $margin="auto"></Image>
          </Container>
        </Container>
        {/* 여기에도 바코드 컴포넌트 넣어봄.. */}
      </Container>
    </Background>
  );
};

export default HomePage;
