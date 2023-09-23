import React from "react";
import { Background } from "@/components/atoms/Background/Background.styles";
import { Container } from "@/components/atoms/Container/Container.styles";
import Back from "@/components/atoms/Back/Back";
import { Text } from "@/components/atoms/Text/Text.styles";
import Button from "@/components/atoms/Button/Button";

const PasswordSettingPage = () => {
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
        >
          <Text size="subtitle1" fontWeight="bold">
            간편 비밀번호 설정
          </Text>
          <Text size="body1" fontWeight="medium">
            비밀번호 6자리를 입력해주세요
          </Text>
          
        </Container>
      </Container>
    </Background>
  );
};

export default PasswordSettingPage;
