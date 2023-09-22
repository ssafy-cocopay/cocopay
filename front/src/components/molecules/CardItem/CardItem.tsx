import React from "react";
import { Image } from "@/components/atoms/Image/Image";
import { Text } from "@/components/atoms/Text/Text.styles";
import cardImg1 from "@/assets/images/img-card1.png";
import korImg from "@/assets/images/img-kor.png";
import iconHamburgerGrey from "@/assets/images/icon-hamburger-grey.png";
import * as S from "./CardItem.styles";
import { Wrapper } from "@/components/atoms/Wrapper/Wrapper.styles";

const CardItem = () => {
  return (
    <div>
      <S.Layout>
        <Image src={cardImg1} width={90} height={56} $unit="px"></Image>
        <Image
          src={korImg}
          width={24}
          height={16}
          $unit="px"
          margin="0 8px 0 0"
          style={{ margin: "8px 0 8px 12px" }}
        ></Image>
        <Wrapper padding="0 0 0 8px" alignItems="flex-start">
          <S.Container style={{ margin: "0 0 8px 0" }}>
            <Text size="small2" fontWeight="regular" color="black1">
              위버스 신한카드 체크(BTS)
            </Text>
          </S.Container>
          <S.Container>
            <Text
              size="small3"
              fontWeight="light"
              color="grey1"
              margin="0 4px 0 0"
            >
              체크
            </Text>
            <Text size="small3" fontWeight="light" color="grey1">
              3571-89**-****-4485
            </Text>
          </S.Container>
        </Wrapper>
        <S.HamburgerContainer>
          <Image
            src={iconHamburgerGrey}
            width={16}
            height={12}
            $unit="px"
          ></Image>
        </S.HamburgerContainer>
      </S.Layout>
      <S.Hr />
    </div>
  );
};

export default CardItem;
