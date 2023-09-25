import React, { useState } from "react";
import { Background } from "@/components/atoms/Background/Background.styles";
import { Container } from "@/components/atoms/Container/Container.styles";
import Back from "@/components/atoms/Back/Back";
import { Text } from "@/components/atoms/Text/Text.styles";
import { Image } from "@/components/atoms/Image/Image";
import cards from "@/assets/images/img-cardline.png";

const OnbordnigPage3 = () => {
  return (
    <Container
      // $left={true}
      // style={{
      //   // backgroundImage: `url(${})`,
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: "center center",
      // }}
      $border={true}
    >
      <Container
        $left={true}
        // align-items="left"
        $paddingTop="63px"
        height="auto"
        $padding="0px"
        $border={true}
      >
        <Text size="body2" fontWeight="bold">
          실적과 혜택을 고려하면서
        </Text>
        <Text size="body2" fontWeight="bold">
          매번 적절한 카드를 선택해
        </Text>
        <Text size="body2" fontWeight="bold">
          결제하기 어려우셨죠?
        </Text>
      </Container>
      {/* TODO:크기 조절해서 맞추기 */}
      <Image style={{ marginTop: "20%" }} src={cards} width={24.2}></Image>
    </Container>
  );
};

export default OnbordnigPage3;
