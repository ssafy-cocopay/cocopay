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
import { Card } from '@/types/card';

interface CardItemProps {
  card: Card;
  onSwipeStart: () => void;
  resetSwipe: boolean;
  swipedIndex: number | null;  // 추가
  index: number;               // 추가
  opendeletemodal: () => void;
  onClick: () => void;
}

function CardItem({ card, onSwipeStart, resetSwipe, swipedIndex, index, opendeletemodal, onClick }: CardItemProps) {
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
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    onSwipeStart(); // 외부에서 전달받은 함수를 호출
    setIsDragging(true); // 드래그 시작을 알리기 위해 isDragging을 true로 설정
    setStartX(e.clientX - x);  // 시작 위치 저장(startX를 현재 마우스 위치에서 카드의 위치 x를 뺀 값으로 설정)
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return; // isDragging이 false면 함수를 종료
    const newX = e.clientX - startX; // newX를 계산하여 현재 마우스 위치에서 시작점 startX를 뺀 값으로 설정
    if (newX < 0 && newX > -window.innerWidth / 16) {  // 4분의 1 제한
      setX(newX); // newX가 0보다 작고 화면 너비의 1/16보다 큰 값이면, x를 newX로 업데이트하여 카드의 위치를 변경
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false); // 드래그 종료를 알리기 위해 isDragging을 false로 설정
    if (x < -window.innerWidth / 32) {  // 8분의 1 지점에서 놓으면 완전히 이동
      setX(-window.innerWidth / 16);
    } else {
      setX(0);  // 원래 위치로 복귀
    }
  };


  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{
          transform: `translateX(${x}px)`,
          transition: isDragging ? 'none' : 'transform 0.3s ease',
          display: "flex",
          width: "125%"
      }}
    >
      <div
      onClick={onClick}
      style={{
        width: "80%"
      }}
      >
      {/* TODO: 서영이가 위에 만들어놓은 더미로 맵 뿌리기 ! */}
      {/* {CardInfo.map((card,idx) => {
        return
      })} */}
      <CardItemWrapper $margin="12px 24px">
        <Image src={card.cardImage} width={90} height={56} $unit="px"></Image>
        {/* TODO: 이부분 asset에 이미지 저장해놓고 api값이랑 맞춰서 국내인지 master 인지 뿌리는건가요? 확인부탁 */}
        <Image
          src={card.master ? imgMaster : card.visa ? imgVisa : korImg}
          width={24}
          height={16}
          $unit="px"
          $margin="0 8px 0 0"
          style={{ margin: "4px 0 8px 12px" }}
        ></Image>
        <Wrapper $padding="0 0 0 8px" $alignItems="start" $justifyContent="space-around">
          <CardItemWrapper>
            <Text size="small2" fontWeight="regular" color="black1">
              {card.cardName}
            </Text>
          </CardItemWrapper>
          <CardItemWrapper>
            <Text
              size="small3"
              fontWeight="light"
              color="grey1"
              $margin="0 4px 0 0"
            >
              {card.cardType}
            </Text>
            <Text size="small3" fontWeight="light" color="grey1">
              {card.serialNumber}
            </Text>
          </CardItemWrapper>
          <div style={{position: 'relative', width: '90%'}}>
            <CardListBar
            width="100%"
            $bgc="grey4"
            >
            </CardListBar>
            <CardListBar
            width={`${card.graphRate}%`}
            $bgc="blue"
            $isAbsolute={true}
            >
            </CardListBar>
          </div>
        </Wrapper>
        <CardItemWrapper $alignItems="center">
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
      <button
      onClick={opendeletemodal}
      style={{
        width: "15%",
        border: "none",
        backgroundColor: "red",
        color: "white",
        fontSize: "16px",
        opacity: isDeleteVisible ? 1 : 0,  // 투명도를 사용하여 보이게/안 보이게 처리
        pointerEvents: isDeleteVisible ? 'auto' : 'none' // 삭제 버튼을 터치/클릭하지 못하게 만듭니다.
        }}
      >
        삭제
      </button>
    </div>
  );
}

export default CardItem;
