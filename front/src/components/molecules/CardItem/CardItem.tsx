import React, { useState, useEffect } from 'react';
import { Image } from "@/components/atoms/Image/Image";
import { Text } from "@/components/atoms/Text/Text.styles";
import cardImg1 from "@/assets/images/img-card1.png";
import korImg from "@/assets/images/img-kor.png";
import iconHamburgerGrey from "@/assets/images/icon-hamburger-grey.png";
import { CardItemWrapper, Hr, CardListBar } from "./CardItem.styles";
import { Wrapper } from "@/components/atoms/Wrapper/Wrapper.styles";
import imgMaster from "@/assets/images/img-master.png"
import imgVisa from "@/assets/images/img-visa.png"
import { Card, CardUpload } from '@/types/card';
import theme from '@/styles/theme';
import { useRecoilValue } from "recoil";

interface CardItemProps {
  card: Card | CardUpload;
  cardType: 'cardlist' | 'cardupload'
  onSwipeStart: () => void;
  resetSwipe: boolean;
  swipedIndex: number | null;  // 추가
  index: number;               // 추가
  opendeletemodal: () => void;
  onClick?: () => void;
}

function CardItem({ card, cardType, onSwipeStart, resetSwipe, swipedIndex, index, opendeletemodal, onClick }: CardItemProps) {
  const cardListData = card as Card;
  const cardUploadData = card as CardUpload;
  
  // 카드의 현재 위치 (픽셀 기준)를 나타냄, 초기값 0
  const [x, setX] = useState<number>(0);
  // 현재 드래그 중인지의 여부, 초기값 false
  const [isDragging, setIsDragging] = useState<boolean>(false);
  // 드래그 시작 시의 마우스 위치, 초기값은 0
  const [startX, setStartX] = useState<number>(0);
  const isDeleteVisible = x <= -window.innerWidth / 32; // 이 값은 카드가 왼쪽으로 얼마나 스와이프되어야 버튼이 보일지 결정합니다.


  // 카드 위치 초기화 하는 코드
  // swipedIndex 또는 index가 변경될 때, 현재 카드의 index가 마지막으로 스와이프된 카드의 swipedIndex와 다르면 카드의 위치를 원래대로 초기화
  useEffect(() => {
    if (index !== swipedIndex) {
      setX(0);
    }
  }, [swipedIndex, index]);

  // resetSwipe가 true로 변경될 때 카드의 위치를 원래대로 초기화
  useEffect(() => {
    if (resetSwipe) {
      setX(0);
    }
  }, [resetSwipe]);

  // 카드 스와이핑 하는 코드
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onSwipeStart();
    setIsDragging(true);
    setStartX(e.touches[0].clientX - x);
  };
  
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!isDragging) return;
    const newX = e.touches[0].clientX - startX;
    if (newX < 0 && newX > -window.innerWidth / 16) {
      setX(newX);
    }
  };
  
  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsDragging(false);
    if (x < -window.innerWidth / 32) {
      setX(-window.innerWidth / 16);
    } else {
      setX(0);
    }
  };

  return (
    <div>
      {cardType === 'cardlist' && (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
          position: "relative",
          transform: `translateX(${x}px)`,
          transition: isDragging ? 'none' : 'transform 0.3s ease',
          display: "flex",
          width: "100%"
      }}
      >
      <div
      onClick={onClick}
      style={{
        width: "100%"
      }}
      >
      <CardItemWrapper $margin="12px 24px">
        <Image src={cardListData && cardListData.cardImage} width={90} height={56} $unit="px"></Image>
        <Image
          src={cardListData && cardListData.master ? imgMaster : cardListData.visa ? imgVisa : korImg}
          width={24}
          height={16}
          $unit="px"
          style={{ margin: "6px 0 8-px 12px" }}
        ></Image>
        <Wrapper $padding="0 0 0 8px" $alignItems="start" $justifyContent="space-around" width="48%" >
          <CardItemWrapper>
            <Text size="small2" fontWeight="regular" color="black1">
              {cardListData && cardListData.cardName}
            </Text>
          </CardItemWrapper>
          <CardItemWrapper>
            <Text
              size="small3"
              fontWeight="light"
              color="grey1"
              $margin="0 4px 0 0"
            >
              {cardListData && cardListData.cardType}
            </Text>
            <Text size="small3" fontWeight="light" color="grey1">
              {cardListData && cardListData.serialNumber}
            </Text>
          </CardItemWrapper>
          <div style={{position: 'relative', width: '100%'}}>
            <CardListBar
            width="100%"
            $bgc="grey4"
            >
            </CardListBar>
            <CardListBar
            width={`${cardListData && cardListData.graphRate}%`}
            $bgc="blue"
            $isAbsolute={true}
            >
            </CardListBar>
          </div>
        </Wrapper>
        <CardItemWrapper $alignItems="center" $margin='0 0 0 24px'>
          <Image
            src={iconHamburgerGrey}
            width={16}
            height={12}
            $unit="px"
          ></Image>
        </CardItemWrapper>
      </CardItemWrapper>
      <Hr />
    </div>
    </div>
    )}
    {cardType === 'cardupload' && (
      <div>
      <div
      style={{
        width: "100%"
      }}
      >
      <CardItemWrapper $margin="12px 24px">
        <Image src={cardUploadData && cardUploadData.cardDefaultImage} width={90} height={56} $unit="px"></Image>
        <Image
          src={cardUploadData && cardUploadData.master ? imgMaster : cardUploadData.visa ? imgVisa : korImg}
          width={24}
          height={16}
          $unit="px"
          style={{ margin: "6px 0 8px 12px" }}
        ></Image>
        <Wrapper $padding="0 0 0 8px" $alignItems="start" $justifyContent="space-around" width="48%" >
          <CardItemWrapper>
            <Text size="small2" fontWeight="regular" color="black1">
              {cardUploadData && cardUploadData.cardName}
            </Text>
          </CardItemWrapper>
          <CardItemWrapper>
            <Text
              size="small3"
              fontWeight="light"
              color="grey1"
              $margin="0 4px 0 0"
            >
              {cardUploadData && cardUploadData.cardType}
            </Text>
            <Text size="small3" fontWeight="light" color="grey1">
              {cardUploadData && cardUploadData.serialNumber}
            </Text>
          </CardItemWrapper>
          <div style={{position: 'relative', width: '100%'}}>
            <CardListBar
            width="100%"
            $bgc="grey4"
            >
            </CardListBar>
            <CardListBar
            width={`${cardUploadData && cardUploadData.graphRate}%`}
            $bgc="blue"
            $isAbsolute={true}
            >
            </CardListBar>
          </div>
        </Wrapper>
        <CardItemWrapper $alignItems="center" $margin='0 0 0 24px'>
          <Image
            src={iconHamburgerGrey}
            width={16}
            height={12}
            $unit="px"
          ></Image>
        </CardItemWrapper>
      </CardItemWrapper>
      <Hr />
    </div>
    </div>
    )}
    </div>
  );
}

export default CardItem;
