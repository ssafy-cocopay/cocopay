import React from "react";
import { Text } from "@/components/atoms/Text/Text.styles";
import { Box, Wrapper, Hr } from "./PaymentList.styles";
import { CardHistoryLists } from "@/types/card";
import numberToAmount from "@/utils/NumToAmount";

interface paymentListProps {
  CardHistory: CardHistoryLists
}

const PaymentList = ({ CardHistory }: paymentListProps) => {

  const isoString = CardHistory.transactionDate

  function formatDate(isoString:string) {
    const date = new Date(isoString);
  
    // 연도, 월, 일을 가져옵니다.
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1을 해줍니다.
    const day = String(date.getDate()).padStart(2, '0');
  
    // 시간과 분을 가져옵니다.
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
  
    return `${year}.${month}.${day} ${hours}:${minutes}`;
  }

  
  return (
    <div>
      <Box>
        <Wrapper $margin="0 0 4px 0">
          <Text size="small1" fontWeight="light" color="black1">
            {CardHistory.store}
          </Text>
          <Text size="small1" fontWeight="light" color="black1">
            {numberToAmount(CardHistory.amount)}원
          </Text>
        </Wrapper>
        <Wrapper>
          <Text size="small3" fontWeight="light" color="grey2">
            {formatDate(isoString)}
          </Text>
          {CardHistory.discountAmount !== 0 && <Text size="small3" fontWeight="light" color="blue">
            {numberToAmount(CardHistory.discountAmount)}원 {CardHistory.discountType === "페이백" ? "페이백 예정" : "현장할인"}
          </Text>}
        </Wrapper>
      </Box>
      <Hr />
    </div>
  );
};

export default PaymentList;
