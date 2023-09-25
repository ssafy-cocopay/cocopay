import React from "react";
import { Container } from "@/components/atoms/Container/Container.styles";
import { Image } from "@/components/atoms/Image/Image";
import helix from "@/assets/images/img-helix-lightblue.png";
import pyramid from "@/assets/images/img-pyramid-yellow.png";
import cone from "@/assets/images/img-cone-yellow.png";

// interface BlueContainerProps {
//   style?: React.CSSProperties;
// }

const BlueContainer = () => {
  return (
    <Container
      $backgroundColor="blue"
      $borderRadius="0 0 54px 54px"
      height="286px"
      style={{ position: "relative" }}
    >
      <Image
        src={helix}
        width={8}
        style={{ position: "absolute", top: "-3rem", left: "10rem" }}
      ></Image>
      <Image
        src={cone}
        width={5}
        style={{ position: "absolute", top: "4rem", left: "-3rem" }}
      ></Image>
      <Image
        src={pyramid}
        width={7}
        style={{ position: "absolute", top: "1rem", right: "0rem" }}
      ></Image>
    </Container>
  );
};

export default BlueContainer;
