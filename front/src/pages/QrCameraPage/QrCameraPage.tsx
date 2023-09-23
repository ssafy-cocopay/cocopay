import { Background } from "@/components/atoms/Background/Background.styles";
import React from "react";

const QrCameraPage = () => {
  return (
    <Background
      $colormode="blue"
      style={{
        minHeight: "100vh",
      }}
    >
      QR 카메라 페이지
    </Background>
  );
};

export default QrCameraPage;
