import React from "react";
// import { Suspense } from "react"; // 추후에 비동기 처리하면서 시간 지연시 활용할 예정
import { Background } from "@/components/atoms/Background/Background.styles";
import Button from "@/components/atoms/Button/Button";
import { useNavigate } from "react-router-dom";
import { PATH } from "@/constants/path";
import coco from "@/assets/images/COCO.png";
import { Image } from "@/components/atoms/Image/Image";
import { Container } from "@/components/atoms/Container/Container.styles";
import { Text } from "@/components/atoms/Text/Text.styles";
import { InputContainer } from "./components/atoms/Input/Input.styles";
import Input from "./components/atoms/Input/Input";

function App() {
  const navigate = useNavigate();
  const navigatePage = (path: string) => {
    navigate(path);
  };

  return (
    <Background colormode="blue">
      <Container>
        <Image src={coco} width={10} style={{}} />
        <Button size="large">로그인</Button>
        <Button size="large" option="activated">
          회원가입
        </Button>
      </Container>
    </Background>
  );
}

export default App;
