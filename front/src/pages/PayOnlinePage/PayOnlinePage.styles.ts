import styled from "styled-components";

type PayOnlineWrapperProps = {
    height?: string;
    $borderRadius?: string;
    $margin?: string;
    $bgc?: string;
  };

export const PayOnlineWrapper = styled.div<PayOnlineWrapperProps>`
    height: ${(props) => props.height};
    background-color: ${(props) => props.theme.color.$bgc};
    border-radius: ${(props) => props.$borderRadius};
`