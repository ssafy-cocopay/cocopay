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
  fontWeight?: "bold" | "medium" | "regular" | "light";
  margin?: string;
}

const getSizeStyling = (size: Required<TextProps>["size"] = "heading1") => {
  const style = {
    heading1: css`
      font-size: ${({ theme }) => theme.fontSize.heading1};
    `,
    subtitle1: css`
      font-size: ${({ theme }) => theme.fontSize.subtitle1};
    `,
    subtitle2: css`
      font-size: ${({ theme }) => theme.fontSize.subtitle2};
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

const getFontWeightStyling = (weight?: TextProps["fontWeight"]) => {
  switch (weight) {
    case "bold":
      return "bold";
    case "medium":
      return "500"; // 'medium'의 경우 CSS에서 표준 값은 500
    case "light":
      return "300"; // 'light'의 경우 CSS에서 표준 값은 300
    default:
      return "400";
  }
};

const Text = styled.p<TextProps>`
  ${({ size = "heading1" }) => getSizeStyling(size)};
  color: ${(props) => props.color ? props.theme.color[props.color] : props.theme.color.black1};
  font-weight: ${(props) => getFontWeightStyling(props.fontWeight)};
  margin: ${(props) => props.margin || "0"};
`;

export { Text };
