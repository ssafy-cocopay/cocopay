import React, { useState } from "react";
import { Background } from "@/components/atoms/Background/Background.styles";
import { Container } from "@/components/atoms/Container/Container.styles";
import Back from "@/components/atoms/Back/Back";
import { Text } from "@/components/atoms/Text/Text.styles";
import { Image } from "@/components/atoms/Image/Image";
import Penguins from "@/assets/images/img-penguins.png";
import Background1 from "@/assets/images/bg-onboarding-1.png";
import Hello from "@/assets/images/text-안녕하세요.png";
const OnbordingPage1 = () => {
  return (
    <Background
      $colormode="gradient"
      style={{
        minHeight: "100vh",
        padding: "36px 28px",
      }}
    >
      <Container
        // $left={true}
        style={{
          backgroundImage: `url(${Background1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
        $border={true}
      >
        <Container
          $left={true}
          // align-items="left"
          $paddingTop="63px"
          height="auto"
          $padding="0px"
          $border={true}
        >
          <Text size="subtitle1" fontWeight="bold" color="white">
            본인확인이 완료되었어요
          </Text>
          <br />
          <Text size="subtitle1" fontWeight="bold" color="white">
            본격적으로 코코페이를
          </Text>
          <Text size="subtitle1" fontWeight="bold" color="white">
            이용해 볼까요?
          </Text>

          <Image
            src={Hello}
            width={15}
            style={{ marginLeft: "50px", marginTop: "90%" }}
          ></Image>

          <Image style={{ marginTop: "10%" }} src={Penguins} width={20}></Image>
        </Container>
      </Container>
    </Background>
  );
};

export default OnbordingPage1;
