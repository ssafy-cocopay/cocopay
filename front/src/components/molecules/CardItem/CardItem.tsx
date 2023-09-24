import React from "react";
import { Image } from "@/components/atoms/Image/Image";
import { Text } from "@/components/atoms/Text/Text.styles";
import cardImg1 from "@/assets/images/img-card1.png";
import cardImg2 from "@/assets/images/img-card2.png";
import cardImg3 from "@/assets/images/img-card.png";
import korImg from "@/assets/images/img-kor.png";
import iconHamburgerGrey from "@/assets/images/icon-hamburger-grey.png";
import { CardItemWrapper, Hr } from "./CardItem.styles";
import { Wrapper } from "@/components/atoms/Wrapper/Wrapper.styles";

const CardItem = () => {
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
    <div>
      {/* TODO: 서영이가 위에 만들어놓은 더미로 맵 뿌리기 ! */}
      {/* {CardInfo.map((card,idx) => {
        return
      })} */}
      <CardItemWrapper $margin="12px 24px">
        <Image src={cardImg1} width={90} height={56} $unit="px"></Image>

        {/* TODO: 이부분 asset에 이미지 저장해놓고 api값이랑 맞춰서 국내인지 master 인지 뿌리는건가요? 확인부탁 */}
        <Image
          src={korImg}
          width={24}
          height={16}
          $unit="px"
          $margin="0 8px 0 0"
          style={{ margin: "8px 0 8px 12px" }}
        ></Image>
        <Wrapper $padding="0 0 0 8px">
          <CardItemWrapper $margin="0 0 8px 0">
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
        </Wrapper>
        <CardItemWrapper $alignItems="center" $padding="0 0 0 8px">
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
  );
};

export default CardItem;
