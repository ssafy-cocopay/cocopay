import React from "react";
import { Suspense } from "react"; // 추후에 비동기 처리하면서 시간 지연시 활용할 예정
import { Background } from "@/components/atoms/Background/Background.styles";
import Button from "@/components/atoms/Button/Button";

function App() {
  return (
    <Background colorMode="blue">
      <div
        style={{
          paddingTop: "100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "200px",
        }}
      >
        <div>COCOPAY</div>
        <Button size="medium" $width="200px">
          로그인
        </Button>
        <Button option="activated" size="medium" $width="200px">
          회원가입
        </Button>
        <Button option="deActivated" size="medium" $width="200px">
          확인
        </Button>
        <Button option="danger" size="medium" $width="200px">
          활성화
        </Button>
        <button style={{ width: "100px", marginTop: "30px" }}>인증하기</button>
      </div>
    </Background>
  );
}

export default App;
