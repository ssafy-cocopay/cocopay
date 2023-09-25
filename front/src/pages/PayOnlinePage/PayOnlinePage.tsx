import { Background } from "@/components/atoms/Background/Background.styles";
import React from "react";
import Button from "@/components/atoms/Button/Button";
import { useNavigate } from "react-router-dom";
import { PATH } from "@/constants/path";
import { PayOnlineWrapper } from "./PayOnlinePage.styles"

const PayOnlinePage = () => {
  const navigate = useNavigate();

  const navigatePage = (path: string) => {
    navigate(path);
  };
  return (
    <Background
      $colormode="gradient"
      style={{
        minHeight: "100vh",
      }}
    >
      <PayOnlineWrapper
      height="180px"
      $bgc="blue"
      $borderRadius="0 0 54px 54px"
      >

      </PayOnlineWrapper>
      <Button
        onClick={() => navigatePage(PATH.PAYONLINECOMPLETE)}
        option="activated"
        size="medium"
        $width="200px"
      >
        결제하기
      </Button>
    </Background>
  );
};

export default PayOnlinePage;
