import { Suspense } from "react";
import React from "react";
import "./App.css";
import { Background } from "./components/atoms/Background/Background.styles";

function WebApp() {
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

export default WebApp;
