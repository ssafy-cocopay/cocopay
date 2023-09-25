import React, { useState } from "react";
import { Background } from "@/components/atoms/Background/Background.styles";
import { Container } from "@/components/atoms/Container/Container.styles";
import Back from "@/components/atoms/Back/Back";
import { Text } from "@/components/atoms/Text/Text.styles";
import { Image } from "@/components/atoms/Image/Image";

const OnbordnigPage2 = () => {
  return (
    <Container
      // $left={true}
      style={{
        // backgroundImage: `url(${})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
      $border={true}
    >
      <Container
        $left={true}
        // align-items="left"
        $paddingTop="63px"
        height="auto"
        $padding="0px"
        $border={true}
      ></Container>
    </Container>
  );
};

export default OnbordnigPage2;
