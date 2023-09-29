import { Background } from "@/components/atoms/Background/Background.styles";
import React, { useState, useEffect } from "react";
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
import { useGetCardDetail } from "@/apis/Card/Queries/useGetCardDetails";
import { usePostCardPurchased } from "@/apis/Card/Mutations/useAddCardList";
import { useParams } from 'react-router-dom';

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

  const { cardId: cardIdStr } = useParams();
  const [cardPurchasedData, setCardPurchasedData] = useState([])
  const [month, setMonth] = useState(0)
  const cardId = Number(cardIdStr); // cardId를 문자열에서 숫자로 변환
  const CardDetail = useGetCardDetail(cardId);
  const CardPurchased = usePostCardPurchased()
  // 달 가져오기
  useEffect(() => {
    const getCurrentMonth = () => {
      const date = new Date();
      setMonth(date.getMonth() + 1)
    };
      getCurrentMonth()
    }, [setMonth])
  // 결제내역 가져오기
  useEffect(() => {
    const handleCardPurchased = () => {
      const payload = {
          cardUuid: 24,
          month: `${month}`
      };
      CardPurchased.mutate(payload, {
          onSuccess: (data) => {
              console.log(data)
              setCardPurchasedData(data);
          }
      });
    }
    handleCardPurchased()
  }, [setCardPurchasedData]);

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
            src={CardDetail.cardImage}
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
          {CardDetail.cardName}
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
            $margin="4px 0 16px 0"
          >
            {CardDetail.price}원
          </Text>
          {CardDetail && <Performance Performance={CardDetail} />}
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
          <PaymentList />
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
