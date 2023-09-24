import React, { useState } from "react";
import { Background } from "@/components/atoms/Background/Background.styles";
import { Container } from "@/components/atoms/Container/Container.styles";
import Back from "@/components/atoms/Back/Back";
import { Text } from "@/components/atoms/Text/Text.styles";
import KeypadButtons from "@/components/molecules/KeypadButtons/KeypadButtons";

const PasswordSettingPage = () => {
  const [step, setStep] = useState(1);

  return (
    <Background $colormode="gradient">
      <Container $left={true} $paddingTop="36px">
        <Back>뒤로가기</Back>
        <Container
          $marginTop="36px"
          $paddingTop="63px"
          $backgroundColor="white"
          $borderRadius="38px"
          height="auto"
          $padding="36px"
        >
          <Text size="subtitle1" fontWeight="bold">
            {step === 1 ? "간편 비밀번호 입력" : "비밀번호 재확인"}
          </Text>
          <Text size="body1" fontWeight="medium">
            {step === 1
              ? "비밀번호 6자리를 입력해주세요"
              : "비밀번호를 다시 입력해주세요"}
          </Text>
          <KeypadButtons step={step} setStep={setStep}></KeypadButtons>
        </Container>
      </Container>
    </Background>
  );
};

export default PasswordSettingPage;
