import React from "react";
import { useNavigate } from "react-router-dom";
import { Background } from "@/components/atoms/Background/Background.styles";
import Button from "@/components/atoms/Button/Button";
import coco from "@/assets/images/COCO.png";
import { PATH } from "@/constants/path";
import { Image } from "@/components/atoms/Image/Image";
import { Container } from "@/components/atoms/Container/Container.styles";
import { Wrapper } from "@/components/atoms/Wrapper/Wrapper.styles";

export const LandingPage = () => {
  const navigate = useNavigate();
  const navigatePage = (path: string) => {
    navigate(path);
  };

  return (
    <Background
      $colormode="blue"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Container>
        <Wrapper $flexGrow={5}>
          <Image src={coco} width={12} />
        </Wrapper>
        <Wrapper $flexGrow={3} style={{ gap: "15px" }}>
          <Button
            onClick={() => navigatePage(PATH.LOGIN_FINGER)}
            size="large"
            $width="85%"
          >
            로그인
          </Button>
          <Button
            onClick={() => navigatePage(PATH.SIGNUP)}
            option="activated"
            size="large"
            $width="85%"
          >
            회원가입
          </Button>
        </Wrapper>
      </Container>
    </Background>
  );
};
