import { Background } from "@/components/atoms/Background/Background.styles";
import React from "react";
import Button from "@/components/atoms/Button/Button";
import { Image } from "@/components/atoms/Image/Image";
import { useNavigate } from "react-router-dom";
import { PATH } from "@/constants/path";
import Performance from "@/components/molecules/Performance/Performance";
import { Text } from "@/components/atoms/Text/Text.styles";
import { Wrapper } from "@/components/atoms/Wrapper/Wrapper.styles";
import Penguin from "@/assets/images/img-penguin-thinking.png";
import Dot from "@/assets/images/icon-dot-gray.png";
import CardImg from "@/assets/images/img-cardimg.png";
import { Container } from "@/components/atoms/Container/Container.styles";

const CardInfo = {
  cardImg: CardImg,
  cardName: "신한카드 Deep Dream 체크카드",
  헤택: "330원",
  남은실적: "55300원",
};

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
          <Text size="body1" fontWeight="bold">
            결제 완료!
          </Text>
          <br />
          <Image src={CardImg} width={88} $unit="%"></Image>
          <br />
          <Container $left={true}>
            <Text size="subtitle2" fontWeight="light">
              코코가 추천해 준
            </Text>
            {/* TODO: 글씨 크기 커졌을 때 어떻게 할지 의논 후 수정 */}
            {/* <Wrapper $flexDirection="row" $justifyContent="start"> */}
            <Text size="subtitle2" fontWeight="bold" color="blue">
              {CardInfo.cardName}
            </Text>
            <Text size="body1" fontWeight="light">
              로
            </Text>
            {/* </Wrapper> */}
            <Wrapper $flexDirection="row" $justifyContent="start">
              <Text size="subtitle2" fontWeight="bold" color="blue">
                {CardInfo.헤택}
              </Text>
              <Text size="subtitle2" fontWeight="light">
                할인 받았어요!
              </Text>
            </Wrapper>
            <br />
            <Text size="subtitle2" fontWeight="light">
              다음 실적까지
            </Text>
            <Wrapper $flexDirection="row" $justifyContent="start">
              <Text size="subtitle2" fontWeight="bold" color="blue">
                {CardInfo.남은실적}
              </Text>
              <Text size="subtitle2" fontWeight="light">
                남았어요
              </Text>
            </Wrapper>
            <br />
            {/* TODO: 실적바 데이터바인딩 생각해서 다시 수정! */}
            <Performance />
            <br />
            <Button onClick={() => navigatePage(PATH.MAIN)} option="activated">
              홈으로
            </Button>
          </Container>
        </Container>
      </Container>
    </Background>
  );
};

export default PayOfflinePage;
