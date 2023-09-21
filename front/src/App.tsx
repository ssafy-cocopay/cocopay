import React from "react";
// import { Suspense } from "react"; // 추후에 비동기 처리하면서 시간 지연시 활용할 예정
import { Background } from "@/components/atoms/Background/Background.styles";
import Button from "@/components/atoms/Button/Button";
import { useNavigate } from "react-router-dom";
import coco from "@/assets/images/COCO.png";
import { PATH } from "@/constants/path";
import { Image } from "@/components/atoms/Image/Image";
import { Container } from "@/components/atoms/Container/Container.styles";
import { Wrapper } from "@/components/atoms/Wrapper/Wrapper.styles";

function App() {
  const navigate = useNavigate();
  const navigatePage = (path: string) => {
    navigate(path);
  };

  return (
    <Background
      colormode="blue"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Container>
        <Wrapper flexGrow={4}>
          <Image src={coco} width={10} />
        </Wrapper>
        <Wrapper flexGrow={2}>
          <Button onClick={() => navigatePage(PATH.LOGIN_FINGER)} size="large">
            로그인
          </Button>
          <Button
            onClick={() => navigatePage(PATH.SIGNUP)}
            option="activated"
            size="large"
          >
            회원가입
          </Button>
        </Wrapper>
      </Container>
    </Background>
  );
}

export default App;
