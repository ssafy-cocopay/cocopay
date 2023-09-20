import styled, { css } from "styled-components";
import { ButtonProps } from "./Button";

const getOptionStyling = (
  option: Required<ButtonProps>["option"],
  props: ButtonProps
) => {
  const style = {
    default: css`
      background: ${({ theme }) => theme.color.white};
      color: ${({ theme }) => theme.color.blue};
    `,
    activated: css`
      background: ${({ theme }) => theme.color.blue};
      color: ${({ theme }) => theme.color.white};
      border-color: ${({ theme }) => theme.color.white};
    `,
    deActivated: css`
      background: ${({ theme }) => theme.color.grey4};
      border: none;
      color: ${({ theme }) => theme.color.grey2};
    `,
    dashed: css`
      background: ${({ theme }) => theme.color.white};
    `,
    danger: css`
      background: ${({ theme }) => theme.color.danger};
      border: none;
      color: ${({ theme }) => theme.color.white};
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
  color: ${(props) => props.color || props.theme.color.black1};
  border: ${(props) =>
    props.$border ||
    `1.5px solid ${props.$borderColor || props.theme.color.blue}`};
    ${({ size = "large" }) => getSizeStyling(size)};
    ${({ option = "default", ...props }) => getOptionStyling(option, props)};
  border-radius: ${(props) => props.$borderRadius || "23px"};
  background-color: ${(props) => props.$backgroundColor};
  margin-top: 10px; // 임시
`;

export { Button };
