import { Background } from "@/components/atoms/Background/Background.styles";
import React from "react";
import Button from "@/components/atoms/Button/Button";
import { Image } from "@/components/atoms/Image/Image";
import { useNavigate } from "react-router-dom";
import { PATH } from "@/constants/path";
import { Container } from "@/components/atoms/Container/Container.styles";
import { Text } from "@/components/atoms/Text/Text.styles";
import { Wrapper } from "@/components/atoms/Wrapper/Wrapper.styles";
import Penguin from "@/assets/images/img-penguin-thinking.png";
import Dot from "@/assets/images/icon-dot-gray.png";
const PayOfflinePage = () => {
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
      <Container $left={true} $paddingTop="36px" height="auto">
        <Container
          $paddingTop="63px"
          $backgroundColor="white"
          $borderRadius="38px"
          height="auto"
          $padding="36px"
          // $border={true}
        >
          <Text size="body1" fontWeight="medium">
            최적의 결제 카드 파악 중...
          </Text>
          <br />
          {/* TODO: 카드리스트업 만들어서 맵으로 뿌려주기 */}
          <Wrapper>카드리스트의 이미지만 추출</Wrapper>
          <br />
          <Container style={{ justifyContent: "flex-end" }} height="auto">
            <Wrapper
              $flexDirection="row"
              // width="20%"
              $justifyContent="space-between"
              style={{ gap: "10px" }}
            >
              <Image src={Dot} width={13} $unit="px"></Image>
              <Image src={Dot} width={13} $unit="px"></Image>
              <Image src={Dot} width={13} $unit="px"></Image>
            </Wrapper>
            {/* TODO: 이미지 하단 고정하기 */}
            <Image
              src={Penguin}
              width={55}
              $unit="%"
              style={{ marginRight: "1.5rem" }}
            ></Image>
          </Container>
          {/* <Button onClick={() => navigatePage(PATH.MAIN)} option="activated">
            홈으로
          </Button> */}
        </Container>
      </Container>
    </Background>
  );
};

export default PayOfflinePage;
