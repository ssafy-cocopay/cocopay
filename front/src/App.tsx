import React from "react";
// import { Suspense } from "react"; // 추후에 비동기 처리하면서 시간 지연시 활용할 예정
import { Background } from "@/components/atoms/Background/Background.styles";
import Button from "@/components/atoms/Button/Button";
import { Text } from "@/components/atoms/Text/Text.styles";

function App() {
  return (
    <Background
      colormode="blue"
      style={{
        // minHeight: "100vh",
        paddingTop: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Text color="white" size={"heading1"} fontWeight="bold">
        COCO
      </Text>
      <Button size="medium" $width="200px">
        로그인
      </Button>
      <Button size="medium" option="activated" $width="200px">
        회원가입
      </Button>
      {/* <Button option="deActivated" size="medium" $width="200px">
        확인
      </Button>
      <Button option="danger" $width="200px" $borderRadius="10px">
        위험
      </Button>
      <Text color="white" size={"heading1"} fontWeight="bold">
        하양색 헤딩 볼드
      </Text>
      <Text size="subtitle1" fontWeight="medium">
        섭타이틀 미듐 기본
      </Text>
      <Text size="body1" color="danger">
        바디 레귤러
      </Text> */}
    </Background>
  );
}

export default App;
