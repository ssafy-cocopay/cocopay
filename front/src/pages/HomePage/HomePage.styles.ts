import React from "react";
import styled from "styled-components";
import { Container } from "@/components/atoms/Container/Container.styles";

export const ScrollableContainer = styled(Container)`
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding-left: 85px;
  margin-top: 200px;
  width: auto;
  position: absolute;
  left: -11px;
`;

export const BlueContainerWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
`;

export const BarcodeUnderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px auto 20px 15px;
  width: 92%;
`;