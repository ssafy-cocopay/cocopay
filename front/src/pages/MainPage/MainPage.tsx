import { Background } from "@/components/atoms/Background/Background.styles";
import NavBar from "@/components/molecules/NavBar/NavBar";
import React from "react";
import { Outlet } from "react-router-dom";

const MainPage = () => {
  return (
    <Background
      $colormode="gradient"
      style={{
        minHeight: "100vh",
      }}
    >
      <Outlet />
      <NavBar />
    </Background>
  );
};

export default MainPage;
