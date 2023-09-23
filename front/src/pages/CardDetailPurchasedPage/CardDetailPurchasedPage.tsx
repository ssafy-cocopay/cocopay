import { Background } from "@/components/atoms/Background/Background.styles";
import React from "react"
import { Text } from "@/components/atoms/Text/Text.styles"
import { Image } from "@/components/atoms/Image/Image"
import iconArrowLeftBlack from "@/assets/images/icon-arrow-left-black.png"
import { Wrapper, Hr } from "./CardDetailPurchasedPage.styles"
import { WhiteRoundedBox } from "@/components/atoms/WhiteRoundedBox/WhiteRoundedBox.styles"
import Calendar from "@/components/molecules/Calendar/Calendar"
import CardHistory from "@/components/molecules/CardHistory/CardHistory"
import PaymentList from "@/components/molecules/PaymentList/PaymentList"

const CardDetailPurchasedPage = () => {
    return (
        <Background
        $colormode="gradient"
        style={{
            height: "calc(100vh + 200px)", 
            padding: "40px 24px"
        }}
        >
            <Wrapper>
                <Image
                src={iconArrowLeftBlack}
                height={24}
                width={24}
                $unit="px"
                >
                </Image>
                <Text
                size="body2"
                fontWeight="bold"
                color="black1"
                >
                    카드 결제내역 상세
                </Text>
            </Wrapper>
            <WhiteRoundedBox
            style={{minHeight:"680px"}}
            $padding="24px 36px"
            $borderRadius="20px"
            >
                <Calendar />
                <CardHistory />
                <Text
                size="small3"
                fontWeight="light"
                color="grey1"
                $margin="0 0 8px 0"
                >
                    최근 결제
                </Text>
                <Hr />
                <PaymentList />
                <PaymentList />
                <PaymentList />
                <PaymentList />
                <PaymentList />
                <PaymentList />
                <PaymentList />
                <PaymentList />
                <PaymentList />
                <PaymentList />
                <PaymentList />
                <PaymentList />
            </WhiteRoundedBox>
        </Background>
    )
}

export default CardDetailPurchasedPage;
