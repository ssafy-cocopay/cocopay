import styled from "styled-components";

type WrapperProps = {
  padding?: string;
  flexGrow?: number;
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
};

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "column"};
  justify-content: ${(props) => props.justifyContent || "center"};
  /* justify-content: space-between; */
  align-items: ${(props) => props.alignItems || "center"};
  width: 100%;
  flex-grow: ${(props) => props.flexGrow || "none"};
  padding: ${(props) => props.padding || 0};
`;
