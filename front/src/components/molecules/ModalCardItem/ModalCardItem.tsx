import React from "react";
import { Image } from "@/components/atoms/Image/Image";
import { Text } from "@/components/atoms/Text/Text.styles";
import cardImg1 from "@/assets/images/img-card1.png";
import cardImg2 from "@/assets/images/img-card2.png";
import cardImg3 from "@/assets/images/img-card3.png";
import korImg from "@/assets/images/img-kor.png";
import imgMaster from "@/assets/images/img-master.png";
import imgVisa from "@/assets/images/img-visa.png";
import iconHamburgerGrey from "@/assets/images/icon-hamburger-grey.png";
import {
  CardItemWrapper,
  CardListBar,
  BenefitBtn,
} from "./ModalCardItem.styles";
import { Wrapper } from "@/components/atoms/Wrapper/Wrapper.styles";
import numberToAmount from "@/utils/NumToAmount";

type ModalCardItemProps = {
  onClick?: () => void;
  style?: React.CSSProperties;
  card: Selected;
};

type Selected = {
  cardId: number;
  cardImage: string;
  cardName: string;
  cardOrder: number;
  cardType: string;
  curPerLevel: number;
  discountRate: number;
  discountType: string;
  discounted: number;
  finalPrice: number;
  graphRate: number;
  master: boolean;
  pastPerfornamce: boolean;
  remainingAmt: number;
  serialNumber: string;
  visa: boolean;
};

const ModalCardItem = ({
  onClick,
  style,
  card,
  ...otherProps
}: ModalCardItemProps) => {
  return (
    <div onClick={onClick} style={style}>
      <CardItemWrapper
        $margin="24px 0"
        style={{ height: "64px", width: "100%" }}
      >
        <Image
          src={card && card.cardImage}
          width={64}
          height={40}
          $unit="px"
          $margin="12px 0 0 0"
          style={{
            transform: "rotate(-90deg)",
          }}
        ></Image>
        <Image
          src={card && card.master ? imgMaster : card.visa ? imgVisa : korImg}
          width={24}
          height={16}
          $unit="px"
          $margin="6px 4px 0 0"
        ></Image>
        <Wrapper
          $padding="0 0 0 8px"
          $alignItems="start"
          $justifyContent="space-around"
          width="43%"
        >
          <CardItemWrapper>
            <Text size="small2" fontWeight="regular" color="black1">
              {card && card.cardName}
            </Text>
          </CardItemWrapper>
          <CardItemWrapper>
            <Text
              size="small3"
              fontWeight="light"
              color="grey1"
              $margin="0 4px 0 0"
            >
              {card && card.cardType}
            </Text>
            <Text size="small3" fontWeight="light" color="grey1">
              {card && card.serialNumber}
            </Text>
          </CardItemWrapper>
          <div style={{ position: "relative", width: "90%" }}>
            <CardListBar width="100%" $bgc="grey4"></CardListBar>
            <CardListBar
              width={`${card && card.graphRate}%`}
              $bgc="blue"
              $isAbsolute={true}
            ></CardListBar>
          </div>
        </Wrapper>
        <CardItemWrapper
          $alignItems="center"
          style={{ width: "31%", justifyContent: "end" }}
        >
          <BenefitBtn>
            {card.discounted === 0 ? (
              <Text size="small3" fontWeight="bold" color="blue">
                혜택 없음
              </Text>
            ) : (
              <Text size="small3" fontWeight="bold" color="blue">
                {card && numberToAmount(card.discounted)}원 할인
              </Text>
            )}
          </BenefitBtn>
        </CardItemWrapper>
      </CardItemWrapper>
    </div>
  );
};

export default ModalCardItem;
