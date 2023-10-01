import { Background } from "@/components/atoms/Background/Background.styles";
import React, { useState } from "react";
import Button from "@/components/atoms/Button/Button";
import { useNavigate } from "react-router-dom";
import { PATH } from "@/constants/path";
import { PayOnlineWrapper, DisplayWrapper } from "./PayOnlinePage1.styles"
import { WhiteRoundedBox } from "@/components/atoms/WhiteRoundedBox/WhiteRoundedBox.styles"
import { Text } from "@/components/atoms/Text/Text.styles"
import { usePostPayOnline } from "@/apis/Card/Mutations/useAddCardList";
import { useRecoilState } from "recoil";
import { PayOnlineCardList } from "@/states/OnlineQrPageAtoms";

type PayOnlinePageProps = {
  onNextPage: () => void;
};

function PayOnlinePage1(props: PayOnlinePageProps) {
  const { onNextPage } = props;
  const [payOnlineCards, setPayOnlineCards] = useRecoilState(PayOnlineCardList)
  console.log(payOnlineCards)
  const PayOnline = usePostPayOnline()

// 결제내역 가져오기
const handlePayOnline = () => {
  const Pay = {
      "category":"주유",
      "storeName":"GS칼텍스",
      "orderPrice":12000
    }
    PayOnline.mutate(Pay, {
      onSuccess: (data) => {
        setPayOnlineCards(data);
        console.log(payOnlineCards)
        onNextPage()
      }
  });
}

  return (
    <Background
      $colormode="gradient"
      style={{
        minHeight: "100vh",
        position: 'relative'
      }}
    >
      <PayOnlineWrapper
      height="420px"
      $borderRadius="0 0 54px 54px"
      >
      </PayOnlineWrapper>
      <PayOnlineWrapper
        $padding="44px 24px 0 24px"
        $bgc="none"
        $margin="-284px 0 0 0"
        style={{
          position: 'relative',
          zIndex: 1
        }}
      >
        <WhiteRoundedBox
          height="424px"
          $borderRadius="38px"
          $padding="140px 36px 0 36px"
          style={{
            textAlign:"center"
          }}
        >
          <Text
          size="subtitle2"
          fontWeight="bold"
          color="black1"
          >
            COCO페이로 결제하려면
          </Text>
          <DisplayWrapper>
          <Text
          size="subtitle2"
          fontWeight="bold"
          color="blue"
          >
            결제하기
          </Text>
          <Text
          size="subtitle2"
          fontWeight="bold"
          color="black1"
          >
            를 눌러주세요.
          </Text>
          </DisplayWrapper>
          <Button
            option="activated"
            size="medium"
            onClick={handlePayOnline}>
            결제하기
          </Button>
        </WhiteRoundedBox>
      </PayOnlineWrapper>
    </Background>
  );
}
export default PayOnlinePage1;
