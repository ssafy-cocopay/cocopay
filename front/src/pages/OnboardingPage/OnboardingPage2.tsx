import React, { useState } from "react";
import { Background } from "@/components/atoms/Background/Background.styles";
import { Container } from "@/components/atoms/Container/Container.styles";
import Back from "@/components/atoms/Back/Back";
import { Text } from "@/components/atoms/Text/Text.styles";
import { Image } from "@/components/atoms/Image/Image";
import cards from "@/assets/images/img-cardsAnimation.png";
import { Wrapper } from "@/components/atoms/Wrapper/Wrapper.styles";

const OnboardnigPage2 = () => {
  return (
    <Container
      // $left={true}
      // style={{
      //   // backgroundImage: `url(${})`,
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: "center center",
      // }}\
      $overflow="visible"
      $border={true}
    >
      <Container $border={true} $padding="0px">
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
      <Image
        src={cards}
        width={30}
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      ></Image>
    </Container>
  );
};

export default OnboardnigPage2;
