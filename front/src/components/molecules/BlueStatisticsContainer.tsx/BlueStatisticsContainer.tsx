import React from "react";
import { Container } from "@/components/atoms/Container/Container.styles";
import { Image } from "@/components/atoms/Image/Image";
import thorusBlue from "@/assets/images/img-thorus-blue.png";
import helix from "@/assets/images/img-helix-yellow.png";
import thorusYellow from "@/assets/images/img-thorus-yellow.png";

// interface BlueContainerProps {
//   style?: React.CSSProperties;
// }

const BlueStatisticsContainer = () => {
  return (
    <Container
      $backgroundColor="blue"
      $borderRadius="0 0 54px 54px"
      height="286px"
      style={{ position: "relative" }}
    >
      <Image
        src={thorusBlue}
        width={8}
        style={{ position: "absolute", top: "-3rem", left: "13rem" }}
      ></Image>
      <Image
        src={helix}
        width={6}
        style={{ position: "absolute", top: "6rem", right: "-1em" }}
      ></Image>
      <Image
        src={thorusYellow}
        width={9}
        style={{ position: "absolute", top: "3rem", left: "-3rem" }}
      ></Image>
    </Container>
  );
};

export default BlueStatisticsContainer;
