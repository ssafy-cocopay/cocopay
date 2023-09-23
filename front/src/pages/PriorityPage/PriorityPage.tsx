import { Background } from "@/components/atoms/Background/Background.styles";
import React, { useState } from "react"
import Button from "@/components/atoms/Button/Button";
import { useNavigate } from "react-router-dom";
import { PATH } from '@/constants/path'
import { Text } from "@/components/atoms/Text/Text.styles"
import { PriorityWrapper } from "./PriorityPage.styles"
import { WhiteRoundedBox } from "@/components/atoms/WhiteRoundedBox/WhiteRoundedBox.styles";
import imgPriorityPerformance from "@/assets/images/img-priority-performane.png"
import imgPrioritySale from "@/assets/images/img-priority-sale.png"

const PriorityPage = () => {
    const navigate = useNavigate()
    const [selectedBox, setSelectedBox] = useState<string | null>(null);

    const navigatePage = (path: string) => {
        navigate(path)
    }

    const handleBoxClick = (boxType: string) => {
      setSelectedBox(boxType);
    };

    return (
        <Background
        $colormode="gradient"
        style={{
            minHeight: "100vh",
            padding:"76px 36px"
        }}
        >
            <PriorityWrapper>
                <Text
                    size="subtitle2"
                    fontWeight="light"
                    color="black1"
                >
                    카드 추천 시
                </Text>
                <Text
                    size="subtitle2"
                    fontWeight="bold"
                    color="black1"
                    $margin="0 0 0 5px"
                >
                    우선 순위로
                </Text>
            </PriorityWrapper>
            <Text
                size="subtitle2"
                fontWeight="light"
                color="black1"
                >
                    무엇을 고려하여 추천해드릴까요?
            </Text>
            <WhiteRoundedBox
            height="220px"
            $margin="56px 0 0 0"
            $src={imgPrioritySale}
            $borderRadius="38px"
            onClick={() => handleBoxClick("sale")}
            $isGrayscale={selectedBox === "sale"}
            >
              
            </WhiteRoundedBox>
            <WhiteRoundedBox
            height="220px"
            $margin="24px 0 44px 0"
            $src={imgPriorityPerformance}
            $borderRadius="38px"
            onClick={() => handleBoxClick("performance")}
            $isGrayscale={selectedBox === "performance"}
            >
            </WhiteRoundedBox>
        <Button onClick={() => navigatePage(PATH.MAIN)} option="activated" size="medium">
            확인
        </Button>
        </Background>
    )
}

export default PriorityPage;