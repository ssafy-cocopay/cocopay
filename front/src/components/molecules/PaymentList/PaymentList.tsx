import React from "react";
import { Text } from "@/components/atoms/Text/Text.styles";
import { Box, Wrapper, Hr } from "./PaymentList.styles";

const PaymentList = () => {
  return (
    <div>
      <Box>
        <Wrapper $margin="0 0 4px 0">
          <Text size="small1" fontWeight="light" color="black1">
            하이마트 둔산대로점
          </Text>
          <Text size="small1" fontWeight="light" color="black1">
            6,900원
          </Text>
        </Wrapper>
        <Wrapper>
          <Text size="small3" fontWeight="light" color="grey2">
            2023.09.07 15:30
          </Text>
          <Text size="small3" fontWeight="light" color="blue">
            330원 페이백 예정
          </Text>
        </Wrapper>
      </Box>
      <Hr />
    </div>
  );
};

export default PaymentList;
