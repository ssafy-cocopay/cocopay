import styled from "styled-components";
import {
  InputStyleProps,
  getTypeStyling,
} from "@/components/atoms/Input/Input.styles";

export const DropdownContainer = styled.select<InputStyleProps>`
  ${({ inputType = "dropdown" }) => getTypeStyling(inputType)};
  width: 100%;
  height: 64px;
  border-radius: 10px;
  font-size: 20px;
  padding: 0 20px;
  color: ${({ theme }) => theme.color.grey1};
  text-align: ${(props) => props.$textAlign || "none"};
  margin-bottom: 18px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`;
