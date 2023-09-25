import styled from "styled-components";
import { Container } from "@/components/atoms/Container/Container.styles";

export const HeaderContainer = styled(Container)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin-top: 12px;
  padding: 30px;
  overflow: visible;
`;

export const BarcodeWhiteContainer = styled(Container)`
  margin-top: 36px;
  background-color: white;
  border-radius: 38px;
  height: 350px;
  position: relative;
  top: 80px;
`;

export const DiscountAndAmountContainer = styled(Container)`
  background-color: white;
  border-radius: 38px;
  height: 230px;
  box-shadow: ${(props) => props.theme.shadow.shadow1};
  width: 85%;
  padding-top: 36px;
  position: absolute;
  top: -80px;
`;

export const CircleIconContainer = styled(Container)`
  background-color: white;
  border-radius: 100%;
  height: 76px;
  width: 76px;
  box-shadow: ${(props) => props.theme.shadow.shadow1};
  padding: 0;
  position: absolute;
  top: -115px;
  right: 0;
`;
