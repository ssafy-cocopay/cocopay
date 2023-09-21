import React from "react";
import { Background } from "@/components/atoms/Background/Background.styles";
import { Container } from "@/components/atoms/Container/Container.styles";
import Back from "@/components/atoms/Back/Back";
import { Text } from "@/components/atoms/Text/Text.styles";
import { Image } from "@/components/atoms/Image/Image";
import fingerPrint from "@/assets/images/img-fingerprint-blue.png";

const LoginFingerPage = () => {
  return (
    <Background colormode="gradient">
      <Container border={true} left={true} paddingTop="36px">
        <Back>뒤로가기</Back>
        <Container
          marginTop="36px"
          paddingTop="63px"
          $backgroundColor="white"
          $borderRadius="38px"
        >
          <Text size="subtitle1" fontWeight="bold">
            지문 등록
          </Text>
          <Text size="body1" fontWeight="medium">
            지문 인증을 완료해주세요
          </Text>
          <Image src={fingerPrint} width={10}></Image>
        </Container>
      </Container>
    </Background>
  );
};

export default LoginFingerPage;
