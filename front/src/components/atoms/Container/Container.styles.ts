import styled from "styled-components";

type ContainerProps = {
  margin?: string;
  padding?: string;
  paddingTop?: string;
  $backgroundColor?: string;
  border?: boolean; // border={true}시 확인용 border 생성
  left?: boolean; // left={true}시 왼쪽정렬
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.left ? "flex-start" : "center")};
  height: 100vh;
  width: 100vw;
  max-width: 390px;
  margin: ${(props) => props.margin || "0 auto"};
  padding: ${(props) => props.padding || "0 36px"};
  padding-top: ${(props) => props.paddingTop};
  background-color: ${(props) => props.$backgroundColor};
  border: ${(props) => (props.border ? "1px solid black" : "none")};
`;

export const CardListContainer = styled.div`
  height: 100vh;
  max-width: 390px;
`;
