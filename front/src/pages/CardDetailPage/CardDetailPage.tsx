import { Background } from "@/components/atoms/Background/Background.styles";
import React from "react"
import Button from "@/components/atoms/Button/Button";
import { useNavigate } from "react-router-dom";
import { PATH } from '@/constants/path'
import { CardDetailContainer } from '@/components/atoms/Container/Container.styles'
import { Text } from '@/components/atoms/Text/Text.styles'
import { Image } from "@/components/atoms/Image/Image";
import iconArrowLeftBlack from "@/assets/images/icon-arrow-left-black.png"
import iconDotsVerticalBlack from "@/assets/images/icon-dots-vertical-black.png"
import imgCard1 from "@/assets/images/img-card1.png"
import { WhiteRoundedBox } from "@/components/atoms/WhiteRoundedBox/WhiteRoundedBox.styles";
import { Wrapper } from "./CardDetailPage.styles";

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
        <CardDetailContainer>
            <Wrapper>
                <Image
                src={iconArrowLeftBlack}
                width={24}
                height={24}
                $unit="px"
                >
                </Image>
                <Text
                size="body2"
                fontWeight="bold"
                color="black1"
                >
                    카드 결제내역
                </Text>
                <Image
                src={iconDotsVerticalBlack}
                width={24}
                height={24}
                $unit="px"
                >
                </Image>
            </Wrapper>
            <Image
            src={imgCard1}
            width={284}
            height={180}
            $unit="px"
            margin="16px 0 12px 28px"
            >
            </Image>
            <Text
                size="body2"
                fontWeight="bold"
                color="black1"
                style={{textAlign:"center"}}
            >
                위버스 신한카드 체크(BTS)
            </Text>
            <WhiteRoundedBox
            height="144px"
            margin="44px 0 16px 0"
            >
            </WhiteRoundedBox>
            <WhiteRoundedBox
            height="500px"
            margin="0 0 20px 0"
            >
            </WhiteRoundedBox>
            <Button onClick={() => navigatePage(PATH.CARD_DETAIL_PURCHASED)} option="activated" size="medium" $width="200px">
                전체내역보기
            </Button>
        </CardDetailContainer>
        </Background>
    )
}

export default CardDetailPage;