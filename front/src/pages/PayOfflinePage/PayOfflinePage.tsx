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
import CardImg1 from "@/assets/images/img-cardimg1.png";
import CardImg2 from "@/assets/images/img-cardimg2.png";
import CardImg3 from "@/assets/images/img-cardimg3.png";
import styled, { keyframes } from "styled-components";

function PayOfflinePage() {
  const CardImgList = [CardImg1, CardImg2, CardImg3];

  // const handlePageTransition = () => {
  //   // 페이지 이동 로직 추가
  //   onNextPage(); // 다음 페이지로 이동
  // };
  // const navigate = useNavigate();

  // const navigatePage = (path: string) => {
  //   navigate(path);


  const rotateLeft = keyframes`
    0% {
    opacity: 1;
    transform-origin: 50% 0;
    transform: perspective(800px) rotateY(0deg) translateZ(0px);
  }

  50% {
    opacity: 0;
    transform-origin: 50% 0;
    transform: perspective(800px) rotateY(-180deg) translateZ(220px);
  }

  50.1% {
    opacity: 0;
    transform-origin: 50% 0;
    transform: perspective(800px) rotateY(180deg) translateZ(220px);
  }

  100% {
    opacity: 1;
    transform-origin: 50% 0;
    transform: perspective(800px) rotateY(0deg) translateZ(0px);
  }`;

  const LeftRotate = styled(Image)`
  position: absolute;
  top: 170px;
  bottom: 300px;
  /* left: 40%; */
  /* transform: translateY(80%); */
  animation: ${rotateLeft} 3s linear infinite;
  transform-origin: center;
  `;

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
          <Text size="body1" fontWeight="bold" $margin="0 0 250px 0">
            최적의 결제 카드 파악 중...
          </Text> 
          <Wrapper $flexDirection="row">
        {CardImgList.map((card, idx) => {
           const animationDelay = `${idx * 0.8}s`;
           const zIndex = CardImgList.length - idx;
          return <LeftRotate src={card} key={idx} width={7} style={{animationDelay,zIndex}} />;
        })}
      </Wrapper>
          {/* <Text size="body1" fontWeight="bold">
            최적의 결제 카드 파악 중...
          </Text> */}
          <br />
          
          
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
