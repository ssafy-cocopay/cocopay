import styled from "styled-components";

type WrapperProps = {
  padding?: string;
  flexGrow?: number;
  center?: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.center ? "center" : "none"};
  justify-content: center; // 세로 중앙 정렬 추가
  width: 100%;
  flex-grow: ${(props) => props.flexGrow || "none"};
  padding: ${(props) => props.padding || 0};
`;
