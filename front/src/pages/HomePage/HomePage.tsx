import { Background } from "@/components/atoms/Background/Background.styles";
import React from "react"

const HomePage = () => {
    return (
        <Background
        colormode="gradient"
        style={{
            minHeight: "100vh"
        }}
        >
            홈페이지
        </Background>
    )
}

export default HomePage;
