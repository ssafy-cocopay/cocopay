import { Background } from "@/components/atoms/Background/Background.styles";
import React from "react";
import Button from "@/components/atoms/Button/Button";
import { useNavigate } from "react-router-dom";
import { PATH } from "@/constants/path";
import { CardListContainer } from "@/components/atoms/Container/Container.styles";
import { Text } from "@/components/atoms/Text/Text.styles";
import { Image } from "@/components/atoms/Image/Image";
import iconArrowLeftBlack from "@/assets/images/icon-arrow-left-black.png";
import iconDotsVerticalBlack from "@/assets/images/icon-dots-vertical-black.png";
import imgCard1 from "@/assets/images/img-card1.png";
import { WhiteRoundedBox } from "@/components/atoms/WhiteRoundedBox/WhiteRoundedBox.styles";
import { Wrapper, CardWrapper, Hr } from "./CardDetailPage.styles";
import Performance from "@/components/molecules/Performance/Performance";
import Calendar from "@/components/molecules/Calendar/Calendar";
import CardHistory from "@/components/molecules/CardHistory/CardHistory";
import PaymentList from "@/components/molecules/PaymentList/PaymentList";
import styled from "styled-components";

export const TextCenterWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const CardDetailPage = () => {
  const navigate = useNavigate();

  const navigatePage = (path: string) => {
    navigate(path);
  };
  return (
    <Background
      $colormode="gradient"
      style={{
        position: "fixed",
      }}
    >
      <CardListContainer $padding="36px 24px">
        <Wrapper>
          <Image
            src={iconArrowLeftBlack}
            width={24}
            height={24}
            $unit="px"
            style={{ position: "fixed" }}
          ></Image>
          <TextCenterWrapper>
            <Text
              $marginLeft="auto"
              size="body2"
              style={{ position: "absolute" }}
              fontWeight="bold"
              color="black1"
            >
              카드 결제내역
            </Text>
          </TextCenterWrapper>
          {/* <Image
            src={iconDotsVerticalBlack}
            width={24}
            height={24}
            $unit="px"
          ></Image> */}
        </Wrapper>
        <CardWrapper>
          <Image
            src={imgCard1}
            height={180}
            $unit="px"
            $margin="46px 0 12px 0"
            style={{ width: "100%" }}
          ></Image>
        </CardWrapper>
        <Text
          size="body2"
          fontWeight="bold"
          color="black1"
          style={{ textAlign: "center" }}
        >
          위버스 신한카드 체크(BTS)
        </Text>
        <WhiteRoundedBox
          height="144px"
          $margin="44px 0 16px 0"
          $padding="20px 28px"
          $borderRadius="20px"
          $boxShadow="shadow1"
        >
          <Text size="body2" fontWeight="regular" color="black1">
            다음 실적까지 남은 금액
          </Text>
          <Text
            size="subtitle1"
            fontWeight="bold"
            color="black1"
            $margin="0 0 16px 0"
          >
            87,623원
          </Text>
          <Performance />
        </WhiteRoundedBox>
        <WhiteRoundedBox
          height="auto"
          $padding="28px"
          $borderRadius="20px"
          $boxShadow="shadow1"
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
          <Button
            onClick={() => navigatePage(PATH.CARD_DETAIL_PURCHASED)}
            option="activated"
            size="medium"
          >
            전체내역보기
          </Button>
        </WhiteRoundedBox>
      </CardListContainer>
    </Background>
  );
};

export default CardDetailPage;
