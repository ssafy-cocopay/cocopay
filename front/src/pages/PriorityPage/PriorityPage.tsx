import { Background } from "@/components/atoms/Background/Background.styles";
import React from "react";
import Button from "@/components/atoms/Button/Button";
import { useNavigate } from "react-router-dom";
import { PATH } from "@/constants/path";

const PriorityPage = () => {
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
      우선순위 선택 페이지
      <Button
        onClick={() => navigatePage(PATH.MAIN)}
        option="activated"
        size="medium"
        $width="200px"
      >
        확인
      </Button>
    </Background>
  );
};

export default PriorityPage;
