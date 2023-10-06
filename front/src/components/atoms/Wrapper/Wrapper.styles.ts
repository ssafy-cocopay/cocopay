import styled from "styled-components";

type WrapperProps = {
  width?: string;
  $padding?: string;
  $flexGrow?: number;
  $flexDirection?: string;
  $alignItems?: string;
  $justifyContent?: string;
  $border?: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: ${(props) => props.$flexDirection || "column"};
  justify-content: ${(props) => props.$justifyContent || "center"};
  align-items: ${(props) => props.$alignItems || "center"};
  width: ${(props) => props.width || "100%"};
  flex-grow: ${(props) => props.$flexGrow || "none"};
  padding: ${(props) => props.$padding || 0};
  border: ${(props) => (props.$border ? "1px solid black" : "none")};
`