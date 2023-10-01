import React from "react";
import { Container } from "@/components/atoms/Container/Container.styles";
import { Image } from "@/components/atoms/Image/Image";
import thorusBlue from "@/assets/images/img-thorus-blue.png";
import helix from "@/assets/images/img-helix-yellow.png";
import thorusYellow from "@/assets/images/img-thorus-yellow.png";
import styled, { keyframes } from "styled-components";
// interface BlueContainerProps {
//   style?: React.CSSProperties;
// }

const shakeRight = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const RightRotate = styled(Image)`
  position: absolute;
  bottom: 0;
  transform: translateY(-50%);
  animation: ${shakeRight} 15s linear infinite;
  transform-origin: center;
`;

const shakeLeft = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
`;

const LeftRotate = styled(Image)`
  position: absolute;
  bottom: 0;
  transform: translateY(-50%);
  animation: ${shakeLeft} 15s linear infinite;
  transform-origin: center;
`;

const BlueStatisticsContainer = () => {
  return (
    <Container
      $backgroundColor="blue"
      $borderRadius="0 0 54px 54px"
      height="286px"
      style={{ position: "relative" }}
      // width="120vw"
    >
      <LeftRotate
        src={thorusBlue}
        width={8}
        style={{ position: "absolute", top: "-3rem", left: "13rem" }}
      ></LeftRotate>
      <RightRotate
        src={helix}
        width={6}
        style={{ position: "absolute", top: "6rem", right: "-1em" }}
      ></RightRotate>
      <RightRotate
        src={thorusYellow}
        width={9}
        style={{ position: "absolute", top: "3rem", left: "-3rem" }}
      ></RightRotate>
    </Container>
  );
};

export default BlueStatisticsContainer;
