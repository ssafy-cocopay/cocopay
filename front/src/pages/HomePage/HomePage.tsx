import React from "react";
import { Background } from "@/components/atoms/Background/Background.styles";
import { Container } from "@/components/atoms/Container/Container.styles";

const HomePage = () => {
  return (
    <Background
      // $colormode="blue"
      style={{
        minHeight: "100vh",
      }}
    >
      <Container $backgroundColor="blue"></Container>
    </Background>
  );
};

export default HomePage;
