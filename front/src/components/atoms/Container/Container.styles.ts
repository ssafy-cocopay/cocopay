import styled from "styled-components";
import theme from "@/styles/theme";

type ContainerProps = {
  height?: string;
  width?: string;
  $margin?: string;
  $marginTop?: string;
  $padding?: string;
  $paddingTop?: string;
  $backgroundColor?: keyof typeof theme.color;
  $borderRadius?: string;
  $border?: boolean; // border={true}시 확인용 border 생성
  $left?: boolean; // left={true}시 왼쪽정렬
  $boxShadow?: string;
};

type CardListContainerProps = {
  $margin?: string;
  $padding?: string;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.$left ? "none" : "center")};
  height: ${(props) => props.height || "100vh"};
  width: ${(props) => props.width || "100%"};
  max-width: 390px;
  margin: ${(props) => props.$margin || "0 auto"};
  margin-top: ${(props) => props.$marginTop};
  padding: ${(props) => props.$padding || "0 26px"};
  padding-top: ${(props) => props.$paddingTop};
  background-color: ${(props) =>
    props.$backgroundColor
      ? props.theme.color[props.$backgroundColor]
      : undefined};
  border: ${(props) => (props.$border ? "1px solid black" : "none")};
  border-radius: ${(props) => props.$borderRadius || 0};
  box-shadow: ${(props) =>
    props.$boxShadow ? props.theme.shadow[props.$boxShadow] : "none"};
`;

export const CardListContainer = styled.div<CardListContainerProps>`
  height: 100vh;
  max-width: 390px;
  padding: ${(props) => props.$padding};
  margin: ${(props) => props.$margin || "0 auto"};
`;
