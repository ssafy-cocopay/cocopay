import styled from "styled-components";

type PayOnlineWrapperProps = {
    height?: string;
    $borderRadius?: string;
    $margin?: string;
    $bgc?: string;
    $padding?: string;
  };

export const PayOnlineWrapper = styled.div<PayOnlineWrapperProps>`
    height: ${(props) => props.height};
    width: 100%;
    background-color: ${(props) => props.$bgc || props.theme.color.blue};
    border-radius: ${(props) => props.$borderRadius};
    padding: ${(props) => props.$padding};
    margin: ${(props) => props.$margin};
`

export const DisplayWrapper = styled.div`
  display:flex;
  justify-content: center;
  margin-bottom: 60px;
`