import { Background } from "@/components/atoms/Background/Background.styles";
import React from "react";
import Button from "@/components/atoms/Button/Button";
import { useNavigate } from "react-router-dom";
import { PATH } from "@/constants/path";
import { PayOnlineWrapper, DisplayWrapper } from "./PayOnlinePage.styles"
import { WhiteRoundedBox } from "@/components/atoms/WhiteRoundedBox/WhiteRoundedBox.styles"
import { Text } from "@/components/atoms/Text/Text.styles"
import { Image } from "@/components/atoms/Image/Image"
import ImgCard1 from "@/assets/images/img-card1.png"

const PayOnlinePage = () => {
  const navigate = useNavigate();

  const navigatePage = (path: string) => {
    navigate(path);
  };
  return (
    <Background
      $colormode="gradient"
      style={{
        minHeight: "100vh",
      }}
    >
      <PayOnlineWrapper
      height="180px"
      $borderRadius="0 0 54px 54px"
      >
      </PayOnlineWrapper>
      <PayOnlineWrapper
      $padding="44px 24px"
      $bgc="none"
      $margin="-136px 0 0 0"
      >
        <WhiteRoundedBox
        height="596px"
        $boxShadow="shadow1"
        $borderRadius="38px"
        $padding="52px 48px"
        >
          <Text
          size="body2"
          fontWeight="bold"
          color="black1"
          $margin="0 0 16px 0"
          >
            COCOs PICK!
          </Text>
          <Image
          src={ImgCard1}
          height={152}
          $margin="0 0 20px 0"
          $unit="px"
          style={{
            width:"100%"
          }}
          >
          </Image>
          <DisplayWrapper
          style={{
            margin:"0 0 4px 0"
          }}
          >
          <Text
          size="body2"
          fontWeight="bold"
          color="black1"
          >
            B.Big(삑)카드
          </Text>
          <Text
          size="body2"
          fontWeight="regular"
          color="black1"
          >
            로 결제하면
          </Text>
          </DisplayWrapper>
          <DisplayWrapper
          style={{
            lineHeight:"28px",
            margin:"0 0 24px 0"
          }}
          >
          <Text
          size="subtitle2"
          fontWeight="bold"
          color="blue"
          >
            10% 페이백
          </Text>
          <Text
          size="body2"
          fontWeight="regular"
          color="black1"
          >
            이 가능해요
          </Text>
          </DisplayWrapper>
          <DisplayWrapper
          style={{
            margin:"0 0 4px 0"
          }}
          >
          <Text
          size="body2"
          fontWeight="bold"
          color="black1"
          >
            다음 실적
          </Text>
          <Text
          size="body2"
          fontWeight="regular"
          color="black1"
          >
            까지 남은 금액
          </Text>
          </DisplayWrapper>
          <Text
          size="subtitle2"
          fontWeight="bold"
          color="blue"
          $margin="0 0 12px 0"
          >
            87,238원
          </Text>
        </WhiteRoundedBox>
      </PayOnlineWrapper>
      <Button
        onClick={() => navigatePage(PATH.PAYONLINECOMPLETE)}
        option="activated"
        size="medium"
        $width="200px"
      >
        결제하기
      </Button>
    </Background>
  );
};

export default PayOnlinePage;
