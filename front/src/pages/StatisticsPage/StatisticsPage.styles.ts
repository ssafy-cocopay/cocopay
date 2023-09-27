import styled from "styled-components";
import { Container } from "@/components/atoms/Container/Container.styles";
import { Wrapper } from "@/components/atoms/Wrapper/Wrapper.styles";
import FlexDiv from "@/components/atoms/FlexDiv/FlexDiv.styles";

export const StatisticsContainer = styled(Container)`
  /* overflow-y: scroll; */
  position: relative;
  top: 240px;
  left: -26px;
`;

export const CategoryWhiteBox = styled(Container)`
  background-color: white;
  border-radius: 38px;
  height: 138px;
  width: 47%;
  box-shadow: ${(props) => props.theme.shadow.shadow1};
  padding-top: 20px;
`;

export const HeaderContainer = styled(Container)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin-top: 28px;
  padding: 30px;
`;

export const WhiteContainer = styled(Container)`
  margin-top: 36px;
  background-color: white;
  border-radius: 38px;
  height: auto;
  position: relative;
  top: 220px;
  padding-top: 24px;
  padding-bottom: 24px;
`;

export const WhiteCategoryWrapper = styled(FlexDiv)`
  width: "100%";
  gap: 17px;
`;

export const TabWrapper = styled(Wrapper)`
  padding: 27px 0 15px 0;
  border: 3px solid black;
  border-width: 0px 0px 3px 0px;
  /* border-bottom: 3px; */
`;

export const TotalAmountWrapper = styled(Wrapper)`
  align-items: start;
  margin-top: 30px;
  padding-left: 10px;
`;

export const BarWrapper = styled(Wrapper)`
  margin-top: 10px;
  height: 35px;
  border-radius: 12px;
  width: 95%;
  margin-bottom: 100px;
`;
