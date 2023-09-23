import styled from "styled-components";

type WrapperProps = {
  $margin?: string;
};

export const Box = styled.div`
  padding: 8px 0;
`;

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: space-between;
  margin: ${(props) => props.$margin};
`;

export const Hr = styled.hr`
  border: none; // 기본 border를 제거합니다.
  border-top: 1px solid ${(props) => props.theme.color.grey4}; // 두께와 색상을 설정합니다.
`;
