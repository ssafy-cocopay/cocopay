import React from "react";
import Button from "@/components/atoms/Button/Button";
import { useNavigate } from "react-router-dom";
import { PATH } from "@/constants/path";
import { Wrapper } from "@/components/atoms/Wrapper/Wrapper.styles";
import { Container } from "@/components/atoms/Container/Container.styles";
import { Image } from "@/components/atoms/Image/Image";
import hand from "@/assets/images/img-hand.png";
import Background5_2 from "@/assets/images/bg-onboarding5-2.png";

import styled, { keyframes } from "styled-components";
import { OnboardingText } from "@/pages/OnboardingPage/OnboardingPage.styles";

const moveTop = keyframes`
  to {
    transform: translateY(calc(-10% - 20px));
  }
`;

const AnimatedImage = styled(Image)`
  position: absolute;
  bottom: 0;
  transform: translateY(-7%);
  animation: ${moveTop} 3s forwards;
`;

function OnboardingPage5() {
  const navigate = useNavigate();

  const navigatePage = (path: string) => {
    navigate(path);
  };
  return (
    <Container
      style={{
        backgroundImage: `url(${Background5_2})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <Container $border={false} $paddingTop="100px">
        <Wrapper $alignItems="start">
          {/* <OnboardingText>모든 카드들의</OnboardingText>
          <OnboardingText>할인율과 실적을 분석하여</OnboardingText> */}
          <OnboardingText>소비처별 최적의 카드를</OnboardingText>
          <OnboardingText>추천해주는 코코페이!</OnboardingText>
          <br />
          <OnboardingText>시작해볼까요?</OnboardingText>
        </Wrapper>
        {/*<Image*/}
        {/*    src={hand}*/}
        {/*    width={20}*/}
        {/*    style={{*/}
        {/*        position: "absolute",*/}
        {/*        bottom: 0,*/}
        {/*        left: "50%",*/}
        {/*        transform: "translateX(-50%)",*/}
        {/*    }}*/}
        {/*></Image>*/}
        <AnimatedImage src={hand} width={24} />

        <Button
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
          onClick={() => navigatePage(PATH.CARDUPLOAD)}
          option="activated"
          $width="70%"
          $border="none"
        >
          코코페이 사용하러 가기
        </Button>
      </Container>
    </Container>
  );
}

export default OnboardingPage5;
