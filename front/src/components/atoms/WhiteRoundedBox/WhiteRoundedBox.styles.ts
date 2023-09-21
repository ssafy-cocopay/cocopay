import styled from "styled-components";

type WhiteRoundedBoxProps = {
    height?: string;
    margin?: string;
  }

export const WhiteRoundedBox = styled.div<WhiteRoundedBoxProps>`
    width: 340px;
    height: ${(props) => props.height};
    background-color: ${(props) => props.theme.color.white};
    box-shadow: ${(props) => props.theme.shadow.shadow1};
    border-radius: 20px;
    margin: ${(props) => props.margin};
`

//   144
// 44px 0 16px 0