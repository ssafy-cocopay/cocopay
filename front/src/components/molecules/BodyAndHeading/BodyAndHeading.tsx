import React from "react";
import { Text } from "@/components/atoms/Text/Text.styles";

interface BodyAndHeadingProps {
  amountType?: string;
  amount?: number;
}

const BodyAndHeading = (props: BodyAndHeadingProps) => {
  // TODO: currentMonth 리코일로?
  const currentMonth = 9;

  return (
    <>
      <Text size="body2" $marginLeft="8px">
        <b>{currentMonth}</b>월에 <b>{props.amountType}</b> 금액
      </Text>
      <div style={{ display: "flex" }}>
        <Text size="heading1" $marginLeft="7px" fontWeight="bold" color="blue">
          {props.amount}
        </Text>
        <Text size="body1" $marginTop="14px">
          원
        </Text>
      </div>
    </>
  );
};

export default BodyAndHeading;
