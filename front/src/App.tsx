import React from "react";
import { Suspense } from "react"; // 추후에 비동기 처리하면서 시간 지연시 활용할 예정
import { Background } from "@/components/atoms/Background/Background.styles";

function App() {
  return (
    <Background
    colormode="blue"
      style={{
        minHeight: "100vh",
        paddingTop: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="App">COCOPAY</div>
      <button style={{ width: "100px", marginTop: "30px" }}>인증하기</button>
    </Background>
  );
}

export default App;
