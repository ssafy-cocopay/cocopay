import { Background } from "@/components/atoms/Background/Background.styles";
import React from "react";
import { Container } from "@/components/atoms/Container/Container.styles";
import { useNavigate } from "react-router-dom";
import { PATH } from "@/constants/path";
import { Text } from "@/components/atoms/Text/Text.styles";
import { Image } from "@/components/atoms/Image/Image";
import Penguin from "@/assets/images/img-penguin-congraturation.png";
import ParticleMove from "./ParticleMove";

const PayOnlineCompletePage = () => {
  const navigate = useNavigate();

  const navigatePage = (path: string) => {
      navigate(path);
  };

  return (
    <Background
      $colormode="gradient"
      style={{
        minHeight: "100vh",
      }}
    >
      <ParticleMove />
      <Container
        $left={true}
        $paddingTop="36px"
        style={{ position: "relative" }}
      >
        <Container
          $paddingTop="63px"
          $backgroundColor="white"
          $borderRadius="38px"
          $padding="36px"
        >
          <Text size="body1" fontWeight="bold">
            결제 완료!
          </Text>
          <Text size="body2" fontWeight="medium">
            웹페이지로 이동하면
          </Text>

          <Text size="body2" fontWeight="medium">
            결제가 완료돼요
          </Text>
          <br />
          {/* <Image src={Penguin} width={70} $unit="%"></Image> */}
        </Container>
        <Container style={{ position: "absolute", left: "0px" }} $padding="0">
          {/* TODO: 이미지 누르면 홈으로 이동하기 onClick */}
          <Image
            src={Penguin}
            width={88}
            $unit="%"
            style={{ marginLeft: "auto", marginTop: "70%" }}
            onClick={() => navigatePage(PATH.MAIN)}
          ></Image>
        </Container>
      </Container>
    </Background>
  );
};

export default PayOnlineCompletePage;
