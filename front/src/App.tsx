import { Suspense } from "react";
import React from "react";
import "./App.css";

function WebApp() {
  return (
    <div
      style={{
        paddingTop: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="App">COCOPAY</div>
      <button style={{ width: "100px", marginTop: "30px" }}>인증하기</button>
    </div>
  );
}

export default WebApp;
