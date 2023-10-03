import React from "react";
import { Container } from "@/components/atoms/Container/Container.styles";
import { Text } from "@/components/atoms/Text/Text.styles";
import { Image } from "@/components/atoms/Image/Image";
import cards from "@/assets/images/img-cardsAnimation.png";
import { Wrapper } from "@/components/atoms/Wrapper/Wrapper.styles";

import styled, { keyframes } from "styled-components";

const moveRight = keyframes`
  to {
    transform: translateX(calc(-50% + 100px));
  }
`;

const AnimatedImage = styled(Image)`
  position: absolute;
  bottom: 0;
  left: 0%;
  transform: translateX(-70%);
  animation: ${moveRight} 20s forwards;
`;

type OnboardingPage2Props = {
  onNextPage: () => void; // 예를 들어, 이동 함수의 타입은 void로 정의할 수 있습니다.
};

function OnboardnigPage2(props: OnboardingPage2Props) {
  const { onNextPage } = props;
  const handlePageTransition = () => {
    // 페이지 이동 로직 추가
    onNextPage(); // 다음 페이지로 이동
  };

  return (
    <Container $overflow="visible">
      <Container $padding="20px" onClick={handlePageTransition}>
        <Wrapper $alignItems="start" style={{ paddingTop: "100px" }}>
          <Text size="subtitle2" fontWeight="bold">
            지갑속의
          </Text>
          <Text size="subtitle2" fontWeight="bold">
            수많은 카드들..
          </Text>
        </Wrapper>
      </Container>
      <br />
      {/* TODO:크기 조절해서 맞추기 */}
      <AnimatedImage onClick={handlePageTransition} src={cards} width={130} />
    </Container>
  );
}

export default OnboardnigPage2;
