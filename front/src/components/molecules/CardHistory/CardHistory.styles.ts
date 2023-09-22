import styled from "styled-components";

type CardHistoryWrapperProps = {
    margin?: string;
    justifyContent?: string;
    alignItems?: string;
  };

export const CardHistoryWrapper = styled.div<CardHistoryWrapperProps>`
    display: flex;
    justify-content: ${(props) => props.justifyContent};
    align-items: ${(props) => props.alignItems};
    margin: ${(props) => props.margin};
`;
