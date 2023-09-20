import { Background } from "@/components/atoms/Background/Background.styles";
import React from "react"

const MyPage = () => {
    return (
        <Background
        colormode="gradient"
        style={{
            minHeight: "100vh"
        }}
        >
            마이 페이지
        </Background>
    )
}

export default MyPage;