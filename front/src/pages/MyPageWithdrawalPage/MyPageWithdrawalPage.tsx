import { Background } from "@/components/atoms/Background/Background.styles";
import React from "react";

const MypageWithdrawalPage = () => {
  return (
    <Background
      $colormode="gradient"
      style={{
        minHeight: "100vh",
      }}
    >
      회원 탈퇴 페이지
    </Background>
  );
};

export default MypageWithdrawalPage;
