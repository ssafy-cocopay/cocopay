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
      colormode="gradient"
      style={{
        minHeight: "100vh",
      }}
    >
      <Container border={true} left={true} paddingTop="36px">
        <Container
          paddingTop="63px"
          $backgroundColor="white"
          $borderRadius="38px"
          //   height="auto"
          padding="36px"
        >
          <Text size="body1" fontWeight="medium">
            최적의 결제 카드 파악 중...
          </Text>
          <br />
          {/* TODO: 카드리스트업 만들어서 맵으로 뿌려주기 */}
          <Wrapper>카드리스트의 이미지만 추출</Wrapper>
          <br />
          <Wrapper
            flexDirection="colounm"
            justifyContent="space-between"
            width="20%"
          >
            {/* TODO: 점이랑 펭귄 가운데 딱 맞추기 */}
            <Image src={Dot} width={13} $unit="px"></Image>
            <Image src={Dot} width={13} $unit="px"></Image>
            <Image src={Dot} width={13} $unit="px"></Image>
          </Wrapper>
          {/* TODO: 이미지 하단 고정하기 */}
          <Image src={Penguin} width={55} $unit="%"></Image>
          {/* <Button onClick={() => navigatePage(PATH.MAIN)} option="activated">
            홈으로
          </Button> */}
        </Container>
      </Container>
    </Background>
  );
};

export default PayOfflinePage;
