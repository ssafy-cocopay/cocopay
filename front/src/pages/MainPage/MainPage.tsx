import { Background } from "@/components/atoms/Background/Background.styles";
import NavBar from "@/components/molecules/NavBar/NavBar";
import React, { Suspense } from "react";
import { Text } from "@/components/atoms/Text/Text.styles";
import { Outlet } from "react-router-dom";

const MainPage = () => {
  return (
    <Suspense fallback={<Text>로딩중</Text>}>
      <Background
        $colormode="gradient"
        style={{
          minHeight: "100vh",
        }}
      >
        <Outlet />
        <NavBar />
      </Background>
    </Suspense>
  );
};

export default MainPage;
