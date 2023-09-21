import styled from "styled-components";

type WrapperProps = {
  padding?: string;
  flexGrow?: number;
};

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; // 세로 중앙 정렬 추가
  width: 100%;
  flex-grow: ${(props) => props.flexGrow || 1};
  padding: ${(props) => props.padding || 0};
`;
