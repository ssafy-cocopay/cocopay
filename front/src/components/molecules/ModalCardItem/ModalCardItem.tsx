import React from "react";
import { Image } from "@/components/atoms/Image/Image";
import { Text } from "@/components/atoms/Text/Text.styles";
import cardImg1 from "@/assets/images/img-card1.png";
import cardImg2 from "@/assets/images/img-card2.png";
import cardImg3 from "@/assets/images/img-card3.png";
import korImg from "@/assets/images/img-kor.png";
import iconHamburgerGrey from "@/assets/images/icon-hamburger-grey.png";
import { CardItemWrapper, CardListBar, BenefitBtn } from "./ModalCardItem.styles";
import { Wrapper } from "@/components/atoms/Wrapper/Wrapper.styles";

type ModalCardItemProps = {
  onClick?: () => void;
  style?: React.CSSProperties;
  // ...기존에 있던 다른 props들...
};

const ModalCardItem = ({ onClick, style, ...otherProps }: ModalCardItemProps) => {
  const CardInfo = [
    {
      cardImg: cardImg1,
      cardName: "위버스 신한카드 체크(BTS)",
      serialNumber: "2128-46**-****-3510",
      cardType: "신용",
      master: true,
      percennt: 30,
    },
    {
      cardImg: cardImg2,
      cardName: "신한카드 플리(산리오캐릭터즈)",
      serialNumber: "2128-46**-****-3510",
      cardType: "신용",
      master: true,
      percennt: 50,
    },
    {
      cardImg: cardImg3,
      cardName: "신한카드 Way 체크 (최고심)",
      serialNumber: "2128-46**-****-3510",
      cardType: "체크",
      master: true,
      percennt: 10,
    },
  ];

  return (
    <div onClick={onClick} style={style}>
      {/* TODO: 서영이가 위에 만들어놓은 더미로 맵 뿌리기 ! */}
      {/* {CardInfo.map((card,idx) => {
        return
      })} */}
      <CardItemWrapper $margin="36px 0">
        <Image 
        src={cardImg1} 
        width={64} 
        height={40} 
        $unit="px"
        $margin="12px 0 0 0"
        style={{
            transform: 'rotate(-90deg)'
        }}
        >
        </Image>
        {/* TODO: 이부분 asset에 이미지 저장해놓고 api값이랑 맞춰서 국내인지 master 인지 뿌리는건가요? 확인부탁 */}
        <Image
          src={korImg}
          width={24}
          height={16}
          $unit="px"
          $margin="4px 4px 0 0"
        ></Image>
        <Wrapper $padding="0 0 0 8px" $alignItems="start" $justifyContent="space-around">
          <CardItemWrapper>
            <Text size="small2" fontWeight="regular" color="black1">
              위버스 신한카드 체크(BTS)
            </Text>
          </CardItemWrapper>
          <CardItemWrapper>
            <Text
              size="small3"
              fontWeight="light"
              color="grey1"
              $margin="0 4px 0 0"
            >
              체크
            </Text>
            <Text size="small3" fontWeight="light" color="grey1">
              3571-89**-****-4485
            </Text>
          </CardItemWrapper>
          <div style={{position: 'relative', width: '90%'}}>
            <CardListBar
            width="80%"
            $bgc="grey4"
            >
            </CardListBar>
            <CardListBar
            width="30%"
            $bgc="blue"
            $isAbsolute={true}
            >
            </CardListBar>
          </div>
        </Wrapper>
        <CardItemWrapper $alignItems="center">
          <BenefitBtn>
            <Text
            size="small3"
            fontWeight="bold"
            color="blue"
            >
                200원
            </Text>
            <Text
            size="small3"
            fontWeight="light"
            color="blue"
            >
                페이백
            </Text>
          </BenefitBtn>
        </CardItemWrapper>
      </CardItemWrapper>
    </div>
  );
};

export default ModalCardItem;
