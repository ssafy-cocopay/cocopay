import React from "react";
import { Container } from "@/components/atoms/Container/Container.styles";
import { Image } from "@/components/atoms/Image/Image";
import helix from "@/assets/images/img-helix-lightblue.png";
import pyramid from "@/assets/images/img-pyramid-yellow.png";
import cone from "@/assets/images/img-cone-yellow.png";
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


const BlueContainer = () => {
  return (
    <Container
      $backgroundColor="blue"
      $borderRadius="0 0 54px 54px"
      height="286px"
      style={{ position: "relative" }}
    >
      <LeftRotate
        src={helix}
        width={8}
        style={{ position: "absolute", top: "-3rem", left: "10rem" }}
      ></LeftRotate>
      <RightRotate
        src={cone}
        width={5}
        style={{ position: "absolute", top: "4rem", left: "-2rem" }}
      ></RightRotate>
      <RightRotate
        src={pyramid}
        width={7}
        style={{ position: "absolute", top: "1rem", right: "-1rem" }}
      ></RightRotate>
    </Container>
  );
};

export default BlueContainer;
