import theme from "@/styles/theme";
import { css, styled } from "styled-components";

export interface InputStyleProps {
  inputType?: "text"; // TODO: password 만들기
  height?: number | string;
  $borderRadius?: number;
  $unit?: "rem" | "px" | "em" | "%";
  fontSize?: typeof theme.fontSize;
  paddingLeft?: number | string;
}

const getTypeStyling = (inputType: Required<InputStyleProps>["inputType"]) => {
  const style = {
    // 기본 input
    text: css`
      border: 1.75px solid ${({ theme }) => theme.color.grey4};
      display: flex;
      flex-direction: row;
      justify-content: center;
      color: ${({ theme }) => theme.color.black1};
      background-color: ${({ theme }) => theme.color.white2};
      /* text-align: center; */
      padding-left: 24px; //TODO: 패딩설정 다시

      &:focus {
        outline: none;
        border: 2px solid ${({ theme }) => theme.color.lightblue};
      }

      &:focus::placeholder {
        color: transparent;
      }
    `,
    //password 용 input
    // password: css`
    //   border: none;
    //   background-color: #f5f5f5;
    // `,
  };
  return style[inputType];
};

const InputContainer = styled.input<InputStyleProps>`
  ${({ inputType = "text" }) => getTypeStyling(inputType)};
  width: ${(props) => `${props.width}${props.$unit}` || "100%"};
  height: ${(props) => `${props.height}${props.$unit}`};
  border-radius: ${(props) => `${props.$borderRadius}px` || "10px"};
  font-size: ${(props) => props.fontSize};
  padding-left: ${(props) => props.paddingLeft};
`;

export { InputContainer };
