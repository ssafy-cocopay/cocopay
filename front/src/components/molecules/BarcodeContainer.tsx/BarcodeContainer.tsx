import React from "react";
import { Container } from "@/components/atoms/Container/Container.styles";
import { Text } from "@/components/atoms/Text/Text.styles";
import Barcode from "react-barcode";

interface BarcodeContainerProps {
  code: string;
}

// 바코드 4글자마다 하이픈 끼워넣기
export const formatBarcode = (input: string): string => {
  return input.replace(/(\d{4})(?=\d)/g, "$1-");
};

const BarcodeContainer = (props: BarcodeContainerProps) => {
  // TODO: 이거 QR에도 적용 가능?
  const formattedBarcode = formatBarcode(props.code);

  return (
    <Container $marginTop="170px" $padding="10 10px">
      <Text size="small1" color="grey1">
        {formattedBarcode}
      </Text>
      <div
        style={{
          borderRadius: "15px",
          overflow: "hidden",
          width: "100%",
          marginTop: "10px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Barcode
          value={props.code}
          format="CODE128"
          width={2.2}
          displayValue={false}
          margin={0}
          height={113}
          lineColor="#303030"
        />
      </div>
    </Container>
  );
};

export default BarcodeContainer;
