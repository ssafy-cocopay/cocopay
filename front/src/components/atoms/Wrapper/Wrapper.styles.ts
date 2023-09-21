import styled from "styled-components";

type WrapperProps = {
  padding?: string;
};

export const Wrapper = styled.div<WrapperProps>`
  padding: ${(props) => props.padding};
`;
