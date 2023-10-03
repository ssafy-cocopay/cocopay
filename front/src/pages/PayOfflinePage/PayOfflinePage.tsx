import { Background } from "@/components/atoms/Background/Background.styles";
import React, { useEffect } from "react";
import Button from "@/components/atoms/Button/Button";
import { Image } from "@/components/atoms/Image/Image";
import { useNavigate } from "react-router-dom";
import { PATH } from "@/constants/path";
import { Container } from "@/components/atoms/Container/Container.styles";
import { Text } from "@/components/atoms/Text/Text.styles";
import { Wrapper } from "@/components/atoms/Wrapper/Wrapper.styles";
import Penguin from "@/assets/images/img-penguin-thinking.png";
import Dot from "@/assets/images/icon-dot-gray.png";
import { useGetCardList } from "@/apis/Card/Queries/useGetCard";

function PayOfflinePage() {
  const CardList = useGetCardList();
  console.log(CardList, "나의 카드들"); //TODO: 카드리스트 있는지 확인
  const firstThreeCards = CardList.slice(0, 3);
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
            최적의 결제 카드 파악 중...
          </Text>
          {/* <Text size="body1" fontWeight="bold">
            최적의 결제 카드 파악 중...
          </Text> */}
          <br />

          <Wrapper $flexDirection="row">
            {firstThreeCards.map((card: any, idx: number) => {
              return <Image src={card.cardImage} key={idx} width={7} />;
            })}
          </Wrapper>
          <br />
          <Container style={{ justifyContent: "flex-end" }} height="auto">
            <Wrapper
              $flexDirection="row"
              // width="20%"
              // $justifyContent="space-between"
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
}

export default PayOfflinePage;
