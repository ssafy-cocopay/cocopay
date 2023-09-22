import React from "react";
import { Background } from "@/components/atoms/Background/Background.styles";
import { Container } from "@/components/atoms/Container/Container.styles";
import Back from "@/components/atoms/Back/Back";
import { Text } from "@/components/atoms/Text/Text.styles";
import Button from "@/components/atoms/Button/Button";
import { Wrapper } from "@/components/atoms/Wrapper/Wrapper.styles";

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
          <Wrapper
            flexDirection="row"
            justifyContent="space-between"
            style={{ margin: "36px 0 28px 0" }}
          >
            {Array.from({ length: 6 }).map((_, index) => (
              <Button
                key={index}
                size="small"
                option="deActivated"
                $borderRadius="12"
                $width="37px"
                $backgroundColor="grey4"
                $border="none"
              >
                <Text
                  size="subtitle1"
                  fontWeight="bold"
                  color="white"
                  style={{ paddingTop: "8px", contentVisibility: "hidden" }}
                >
                  *
                </Text>
              </Button>
            ))}
          </Wrapper>
        </Container>
      </Container>
    </Background>
  );
};

export default LoginPasswordPage;
