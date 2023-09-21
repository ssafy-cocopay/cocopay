import React from "react";
// import { Suspense } from "react"; // 추후에 비동기 처리하면서 시간 지연시 활용할 예정
import { Background } from "@/components/atoms/Background/Background.styles";
import Button from "@/components/atoms/Button/Button";
import { useNavigate } from "react-router-dom";
import coco from "@/assets/images/COCO.png";
import { PATH } from "@/constants/path";
import { Image } from "@/components/atoms/Image/Image";
import { Container } from "@/components/atoms/Container/Container.styles";

function App() {
  const navigate = useNavigate();
  const navigatePage = (path: string) => {
    navigate(path);
  };

  return (
    <Background
      colormode="blue"
      style={{
        paddingTop: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Container>
        <Image src={coco} width={10} />
        <Button onClick={() => navigatePage(PATH.LOGIN_FINGER)} size="medium">
          로그인
        </Button>
        <Button
          onClick={() => navigatePage(PATH.SIGNUP)}
          option="activated"
          size="medium"
        >
          회원가입
        </Button>
      </Container>
    </Background>
  );
}

export default App;
