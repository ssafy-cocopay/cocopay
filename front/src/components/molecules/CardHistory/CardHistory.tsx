import React from "react";
import { Text } from "@/components/atoms/Text/Text.styles";
import { Wrapper } from "./CardHistory.styles";
import { CardAmount } from "@/types/card";
import numberToAmount from "@/utils/NumToAmount";

const CardHistory = ({ CardAmount }: CardAmount) => {
  return (
    <div>
      <Wrapper $margin="0 0 12px 0">
        <Text size="body2" fontWeight="bold" color="black1">
          이용내역
        </Text>
        <div style={{ display: "flex"}}>
          <Text size="subtitle2" fontWeight="bold" color="black1">
            {numberToAmount(CardAmount.amount)}
          </Text>
          <Text size="subtitle2" fontWeight="light" color="black1">
            원
          </Text>
        </div>
      </Wrapper>
      <Wrapper $margin="0 0 28px 0">
        <Text size="body2" fontWeight="bold" color="black1">
          받은혜택
        </Text>
        <div style={{ display: "flex"}}>
          <Text size="subtitle2" fontWeight="bold" color="blue">
          {numberToAmount(CardAmount.discountAmount)}
          </Text>
          <Text size="subtitle2" fontWeight="light" color="blue">
            원
          </Text>
        </div>
      </Wrapper>
    </div>
  );
};

export default CardHistory;