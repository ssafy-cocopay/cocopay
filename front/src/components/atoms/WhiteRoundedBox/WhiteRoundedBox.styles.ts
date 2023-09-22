import styled from "styled-components";

type WhiteRoundedBoxProps = {
    height?: string;
    margin?: string;
    padding?: string;
  }

export const WhiteRoundedBox = styled.div<WhiteRoundedBoxProps>`
    width: 100%;
    height: ${(props) => props.height};
    background-color: ${(props) => props.theme.color.white};
    box-shadow: ${(props) => props.theme.shadow.shadow1};
    border-radius: 20px;
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
`