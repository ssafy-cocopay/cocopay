import theme from "@/styles/theme";
import styled, { css } from "styled-components";

export interface TextProps {
  size?:
    | "heading1"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "small1"
    | "small2"
    | "small3";
  color?: typeof theme.color;
  //width 단위는 픽셀
  width?: number;
  $fontWeight?: string;
}

const getSizeStyling = (size: Required<TextProps>["size"] = "heading1") => {
  const style = {
    heading1: css`
      font-size: ${({ theme }) => theme.fontSize.heading1};
    `,
    subtitle1: css`
      font-size: ${({ theme }) => theme.fontSize.subtitile1};
    `,
    subtitle2: css`
      font-size: ${({ theme }) => theme.fontSize.subtitile2};
    `,
    body1: css`
      font-size: ${({ theme }) => theme.fontSize.body1};
    `,
    body2: css`
      font-size: ${({ theme }) => theme.fontSize.body2};
    `,
    small1: css`
      font-size: ${({ theme }) => theme.fontSize.small1};
    `,
    small2: css`
      font-size: ${({ theme }) => theme.fontSize.small2};
    `,
    small3: css`
      font-size: ${({ theme }) => theme.fontSize.small3};
    `,
  };
  return style[size];
};

const Text = styled.p<TextProps>`
  ${({ size = "heading1" }) => getSizeStyling(size)};
  color: ${(props) => props.color || props.theme.color.black1};
  font-weight: ${(props) => `${props.$fontWeight}`};
`;

export { Text };
