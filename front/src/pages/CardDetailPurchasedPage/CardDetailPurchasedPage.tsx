import { Background } from "@/components/atoms/Background/Background.styles";
import React from "react";

const CardDetailPurchasedPage = () => {
  return (
    <Background
      $colormode="gradient"
      style={{
        minHeight: "100vh",
      }}
    >
      카드 전체 결제내역 페이지
    </Background>
  );
};

export default CardDetailPurchasedPage;
