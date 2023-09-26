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
  border: none; 
  border-top: 1px solid ${(props) => props.theme.color.grey4};
`;
