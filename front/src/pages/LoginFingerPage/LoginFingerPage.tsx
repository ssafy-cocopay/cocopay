import React from "react";
import { Background } from "@/components/atoms/Background/Background.styles";
import { Container } from "@/components/atoms/Container/Container.styles";
import Back from "@/components/atoms/Back/Back";
import { createTrue } from "typescript";

const LoginFingerPage = () => {
  return (
    <Background
      colormode="gradient"
      style={{
        minHeight: "100vh",
      }}
    >
      <Container border={true} left={true} paddingTop="36px">
        <Back>뒤로가기</Back>
      </Container>
    </Background>
  );
};

export default LoginFingerPage;
