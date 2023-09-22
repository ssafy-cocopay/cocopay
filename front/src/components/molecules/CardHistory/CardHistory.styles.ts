import styled from "styled-components";

type WrapperProps = {
    margin?: string;
  };

export const Wrapper = styled.div<WrapperProps>`
    display: flex;
    justify-content: space-between;
    margin: ${(props) => props.margin};
`;
