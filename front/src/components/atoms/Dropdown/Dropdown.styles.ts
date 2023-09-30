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
  padding: 0 24px;
  color: ${({ theme }) => theme.color.grey1};
  text-align: ${(props) => props.$textAlign || "none"};
  margin-bottom: 18px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  /* 커스텀 아이콘 화살표 추가 (예시로는 ▼ 문자를 사용) */
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M7 10L12 15L17 10H7Z" fill="%23000000"/></svg>')
    no-repeat;
  background-position: right 12px center;
`;

export const OptionContainer = styled.option`
  font-size: 18px;
  padding: 8px 12px;
  color: ${({ theme }) => theme.color.grey1};
  width: 100px;
  border-radius: 20px;
  /* 선택된 옵션 스타일링 */
  &:selected {
    background-color: ${({ theme }) => theme.color.grey3};
    border-radius: 4px;
  }
`;
