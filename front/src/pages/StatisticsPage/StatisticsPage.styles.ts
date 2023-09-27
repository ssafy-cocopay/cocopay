import styled from "styled-components";
import { Container } from "@/components/atoms/Container/Container.styles";
import FlexDiv from "@/components/atoms/FlexDiv/FlexDiv.styles";

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
