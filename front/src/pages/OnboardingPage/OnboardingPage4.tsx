import React, { useState } from "react";
import { Background } from "@/components/atoms/Background/Background.styles";
import { Container } from "@/components/atoms/Container/Container.styles";
import Back from "@/components/atoms/Back/Back";
import { Text } from "@/components/atoms/Text/Text.styles";
import { Image } from "@/components/atoms/Image/Image";
import Background4 from "@/assets/images/bg-onboarding4.png";
import { Wrapper } from "@/components/atoms/Wrapper/Wrapper.styles";
const OnboardnigPage4 = () => {
  const Username = { name: "성현" };
  return (
    // TODO: 반응형 크기 맞추기
    <Container
      $border={true}
      style={{
        backgroundImage: `url(${Background4})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <Container $border={true} $paddingTop="100px">
        <Wrapper $alignItems="start">
          <Text size="subtitle2" color="white">
            이제부터는 코코가
          </Text>
          <Text size="subtitle2" color="white">
            {Username.name}님의
          </Text>
          <Text size="subtitle2" color="white">
            슬기로운 소비생활을
          </Text>
          <Text size="subtitle2" color="white">
            도와드릴게요!
          </Text>
        </Wrapper>
      </Container>
    </Container>
  );
};

export default OnboardnigPage4;
