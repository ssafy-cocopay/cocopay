import React, { useState } from "react";
import { Background } from "@/components/atoms/Background/Background.styles";
import { Container } from "@/components/atoms/Container/Container.styles";
import Back from "@/components/atoms/Back/Back";
import { Text } from "@/components/atoms/Text/Text.styles";
import { Image } from "@/components/atoms/Image/Image";
import cards from "@/assets/images/img-cardline.png";
// import question from "@/assets/images/img-question.png";
// import person from "@/assets/images/img-thinkingPeople.png";
import questionPerson from "@/assets/images/img-questionPerson.png";
import { Wrapper } from "@/components/atoms/Wrapper/Wrapper.styles";

const OnboardnigPage3 = () => {
  return (
    // TODO: 반응형 크기 맞추기
    <Container
      $border={true}
      $overflow="visible"
      style={{ paddingBottom: "100px", position: "relative" }}
    >
      <Container
        // align-items="left"
        $paddingTop="100px"
        // height="auto"
        $padding="0px"
        $border={true}
        style={{ paddingBottom: "100px" }}
      >
        <Wrapper $alignItems="start">
          <Text size="subtitle2" fontWeight="bold">
            실적과 혜택을 고려하면서
          </Text>
          <Text size="subtitle2" fontWeight="bold">
            매번 적절한 카드를 선택해
          </Text>
          <Text size="subtitle2" fontWeight="bold">
            결제하기 어려우셨죠?
          </Text>
        </Wrapper>{" "}
        <Image style={{ marginTop: "30%" }} src={cards} width={40}></Image>
        <Image
          src={questionPerson}
          width={20}
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        ></Image>
      </Container>
      {/* TODO:크기 조절해서 맞추기 */}
    </Container>
  );
};

export default OnboardnigPage3;
