import React from "react";
import { Background } from "@/components/atoms/Background/Background.styles";
import BlueContainer from "@/components/molecules/BlueContainer/BlueContainer";
import { Text } from "@/components/atoms/Text/Text.styles";
import { Container } from "@/components/atoms/Container/Container.styles";
import { Image } from "@/components/atoms/Image/Image";
import search from "@/assets/images/icon-search-blue.png";
import { Line } from "@/components/atoms/Line/Line.style";
import BodyAndHeading from "@/components/molecules/BodyAndHeading/BodyAndHeading";
const HomePage = () => {


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
      </Container>
    </Background>
  );
};

export default HomePage;
