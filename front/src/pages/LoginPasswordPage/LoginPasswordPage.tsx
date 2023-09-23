import React from "react";
import { Background } from "@/components/atoms/Background/Background.styles";
import { Container } from "@/components/atoms/Container/Container.styles";
import Back from "@/components/atoms/Back/Back";
import { Text } from "@/components/atoms/Text/Text.styles";
import PwCheckButtons from "@/components/molecules/PwCheckButtons/PwCheckButtons";

const LoginPasswordPage = () => {
  return (
    <Background colormode="gradient">
      <Container left={true} paddingTop="36px">
        <Back>뒤로가기</Back>
        <Container
          marginTop="36px"
          paddingTop="63px"
          $backgroundColor="white"
          $borderRadius="38px"
          height="auto"
          padding="36px"
        >
          <Text size="subtitle1" fontWeight="bold">
            간편 비밀번호 입력
          </Text>
          <Text size="body1" fontWeight="medium">
            비밀번호 6자리를 입력해주세요
          </Text>
          <PwCheckButtons></PwCheckButtons>
        </Container>
      </Container>
    </Background>
  );
};

export default LoginPasswordPage;
