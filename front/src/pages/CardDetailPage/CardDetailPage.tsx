import { Background } from "@/components/atoms/Background/Background.styles";
import React from "react"
import Button from "@/components/atoms/Button/Button";
import { useNavigate } from "react-router-dom";
import { PATH } from '@/constants/path'

const CardDetailPage = () => {
    const navigate = useNavigate()

    const navigatePage = (path: string) => {
        navigate(path)
    }
    return (
        <Background
        colormode="gradient"
        style={{
            minHeight: "100vh"
        }}
        >
            카드 상세정보 페이지
        <Button onClick={() => navigatePage(PATH.CARD_DETAIL_PURCHASED)} option="activated" size="medium" $width="200px">
            전체내역보기
        </Button>
        </Background>
    )
}

export default CardDetailPage;