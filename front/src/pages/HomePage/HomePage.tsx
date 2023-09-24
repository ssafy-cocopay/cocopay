import React from "react";
import { Background } from "@/components/atoms/Background/Background.styles";
import BlueContainer from "@/components/molecules/BlueContainer/BlueContainer";
import { Text } from "@/components/atoms/Text/Text.styles";
import { Container } from "@/components/atoms/Container/Container.styles";

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
          style={{ position: "relative", top: "100px" }}
        >
          <Container
            $backgroundColor="white"
            $borderRadius="38px"
            height="230px"
            $boxShadow="shadow1"
            width="85%"
            style={{ position: "absolute", top: "-100px" }}
          ></Container>
        </Container>
      </Container>
    </Background>
  );
};

export default HomePage;
