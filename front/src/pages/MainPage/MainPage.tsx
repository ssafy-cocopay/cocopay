import { Background } from "@/components/atoms/Background/Background.styles";
import NavBar from "@/components/molecules/NavBar/NavBar";
import React from "react";
import { Outlet } from "react-router-dom";

const MainPage = () => {
  return (
    <Background
    colormode="gradient"
    style={{
        minHeight: "100vh"
    }}
    >
      메인 페이지
      <Outlet />
      <NavBar />
      </Background>
  )
};

export default MainPage;
