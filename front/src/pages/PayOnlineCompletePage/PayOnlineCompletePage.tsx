import { Background } from "@/components/atoms/Background/Background.styles";
import React from "react";
import Button from "@/components/atoms/Button/Button";
import { Container } from "@/components/atoms/Container/Container.styles";
import { useNavigate } from "react-router-dom";
import { PATH } from "@/constants/path";
import { Text } from "@/components/atoms/Text/Text.styles";
import { Image } from "@/components/atoms/Image/Image";
import Penguin from "@/assets/images/img-penguin-congraturation.png";

const PayOnlineCompletePage = () => {
  const navigate = useNavigate();

  const navigatePage = (path: string) => {
    navigate(path);
  };
  return (
    <Background
      colormode="gradient"
      style={{
        minHeight: "100vh",
      }}
    >
      온라인 결제완료 페이지
      <Container border={true} left={true} paddingTop="36px">
        <Container
          paddingTop="63px"
          $backgroundColor="white"
          $borderRadius="38px"
          //   height="auto"
          padding="36px"
        >
          <Text size="subtitle1" fontWeight="bold">
            결제 완료!
          </Text>
          <Text size="body1" fontWeight="medium">
            웹페이지로 이동하면
          </Text>
          <Text size="body1" fontWeight="medium">
            결제가 완료돼요
          </Text>
          <br />

          <Image src={Penguin} width={70} $unit="%"></Image>
          <Button
            onClick={() => navigatePage(PATH.FIGNER_SETTING)}
            option="activated"
            size="medium"
            $width="200px"
          >
            홈으로
          </Button>
        </Container>
      </Container>
    </Background>
  );
};

export default PayOnlineCompletePage;
