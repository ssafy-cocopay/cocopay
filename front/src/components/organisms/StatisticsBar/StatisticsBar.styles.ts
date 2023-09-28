import styled from "styled-components";
import { Wrapper } from "@/components/atoms/Wrapper/Wrapper.styles";
import theme from "@/styles/theme";

export const StatisticsBarWrapper = styled(Wrapper)`
  margin-top: 10px;
  margin-bottom: 18px;
  height: 35px;
  border-radius: 12px;
  width: 95%;
  align-items: flex-start;
  overflow: hidden;
`;

export const BarRateWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const BarRate = styled.div`
  background-color: ${theme.color.black1};
`;

export const StatisticsContentsWrapper = styled.div`
  border: 1px solid black;
`;
