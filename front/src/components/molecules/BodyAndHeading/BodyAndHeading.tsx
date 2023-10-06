import React from "react";
import { Text } from "@/components/atoms/Text/Text.styles";
import numberToAmount from "@/utils/NumToAmount";
import FlexDiv from "@/components/atoms/FlexDiv/FlexDiv.styles";

interface BodyAndHeadingProps {
  amountType?: string;
  amount?: number;
}


const BodyAndHeading = (props: BodyAndHeadingProps) => {
  //시스템 시간 기준 'month' 받아옴
  const date = new Date().getMonth() + 1;

  // TODO: currentMonth 리코일로?
  const currentMonth = date;
  let korAmount: string;
  if (props.amount) {
    korAmount = numberToAmount(props.amount);
  } else {
    korAmount = "0";
  }

  return (
    <>
      <Text size="body2" $marginLeft="8px">
        <b>{currentMonth}</b>월에 <b>{props.amountType}</b> 금액
      </Text>
      <FlexDiv>
        <Text size="heading1" $marginLeft="7px" fontWeight="bold" color="blue">
          {korAmount}
        </Text>
        <Text size="body1" $marginTop="14px">
          원
        </Text>
      </FlexDiv>
    </>
  );
};

export default BodyAndHeading;
