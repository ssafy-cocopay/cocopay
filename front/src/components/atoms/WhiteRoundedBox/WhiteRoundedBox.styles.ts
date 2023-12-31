import styled from "styled-components";

type WhiteRoundedBoxProps = {
  height?: string;
  $margin?: string;
  $padding?: string;
  $src?: string;
  $borderRadius?: string;
  $isGrayscale?: boolean;
  $boxShadow?: string;
};

export const WhiteRoundedBox = styled.div<WhiteRoundedBoxProps>`
  width: 100%;
  height: ${(props) => props.height};
  background-color: ${(props) => props.theme.color.white};
  box-shadow: ${(props) =>
    props.$boxShadow ? props.theme.shadow[props.$boxShadow] : "none"};
  border-radius: ${(props) => props.$borderRadius};
  margin: ${(props) => props.$margin};
  padding: ${(props) => props.$padding};
  background-image: url(${(props) => props.$src});
  background-size: cover;
  background-position: center;
  filter: ${(props) => (props.$isGrayscale ? "grayscale(100%)" : "none")};
`;
