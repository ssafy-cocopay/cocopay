import styled, { css } from "styled-components";
import { ButtonProps } from "./Button";
import theme from "@/styles/theme";

const getOptionStyling = (
  option: Required<ButtonProps>["option"],
  props: ButtonProps
) => {
  const style = {
    default: css`
      background: ${({ theme }) => theme.color.white};
      color: ${({ theme }) => theme.color.blue};
      font-weight: bold;
    `,
    activated: css`
      background: ${({ theme }) => theme.color.blue};
      color: ${({ theme }) => theme.color.white};
      border-color: ${({ theme }) => theme.color.white};
      font-weight: bold;
    `,
    deActivated: css`
      background: ${({ theme }) => theme.color.grey5};
      border: none;
      color: ${({ theme }) => theme.color.grey2};
    `,
    dashed: css`
      background: ${({ theme }) => theme.color.white};
      border: 0.1em dashed;
      border-color: ${({ theme }) => theme.color.grey3};
      color: ${({ theme }) => theme.color.grey1};
    `,
    danger: css`
      background: ${({ theme }) => theme.color.danger};
      border: none;
      color: ${({ theme }) => theme.color.white};
    `,
    keypad: css`
      background: ${({ theme }) => theme.color.grey5};
      color: ${({ theme }) => theme.color.grey2};
      font-weight: bold;
      font-size: ${({ theme }) => theme.fontSize.body1};

      &:active {
        background: ${({ theme }) => theme.color.blue};
        color: ${({ theme }) => theme.color.white};

        .invert {
          filter: invert(1);
        }
      }
    `,
  };
  return props.$backgroundColor
    ? css`
        background: ${props.$backgroundColor};
      `
    : style[option];
};

const getSizeStyling = (size: Required<ButtonProps>["size"]) => {
  const style = {
    small: css`
      height: 40px;
      font-size: ${({ theme }) => theme.fontSize.subtitle1};
      border-radius: 12px;
    `,
    medium: css`
      height: 55px;
      font-size: ${({ theme }) => theme.fontSize.body2};
      border-radius: 14px;
    `,
    large: css`
      height: 67px;
      font-size: ${({ theme }) => theme.fontSize.body1};
      border-radius: 23px;
    `,
  };
  return style[size];
};

const Button = styled.button<ButtonProps>`
  width: ${(props) => props.$width || "100%"};
  text-align: ${(props) => props.$textAlign || "center"};
  color: ${(props) =>
    props.color ? props.theme.color[props.color] : theme.color.black1};
  border: ${(props) =>
    props.$border ||
    `1.5px solid ${props.$borderColor || props.theme.color.blue}`};
  border-radius: ${(props) => props.$borderRadius || "23px"};
  ${({ size = "large" }) => getSizeStyling(size)};
  ${({ option = "default", ...props }) => getOptionStyling(option, props)};
  font-size: ${(props) => props.$fontSize || "20px"};
  background-color: ${(props) => props.$backgroundColor};
`;

export { Button };
