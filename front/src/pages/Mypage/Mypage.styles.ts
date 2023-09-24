import styled from "styled-components";

type MypageWrapperProps = {
  $justifyContent?: string;
};

export const MypageWrapper = styled.div<MypageWrapperProps>`
    display: flex;
    justify-content: ${(props) => props.$justifyContent};
`

export const Checkbox = styled.input`
  width: 30px;
  height: 12px;
  background: ${(props) => props.theme.color.blue};
  border-radius: 12px;
  margin-right: 12px;
  &::before {
    content: "";
    text-align: center;
    line-height: 18.75px;
    width: 37.5px;
    height: 18.75px;
    display: block;
    position: absolute;
    border-radius: 11.25px;
    background-color: ${(props) => props.theme.color.grey2};
    box-shadow: 0 0 6px 1.125px rgba(0, 0, 0, 0.15);
    transition: all 0.2s ease-in;
    cursor: pointer;
  }
  &::after {
    content: "";
    display: block;
    position: relative;
    width: 15px;
    height: 15px;
    top: 1.875px;
    left: 1.875px;
    border-radius: 50%;
    background: ${(props) => props.theme.color.white};
    transition: all 0.2s ease-in;
  }
  &:checked {
    &::before {
      background-color: ${(props) => props.theme.color.blue};
    }
    &::after {
      background-color: ${(props) => props.theme.color.white};
      left: calc(100% - 9.375px);
    }
  }
`

export const Hr = styled.hr`
  border: none; // 기본 border를 제거합니다.
  border-top: 1px solid ${(props) => props.theme.color.grey4}; // 두께와 색상을 설정합니다.
  margin: 20px 0 44px 0;
`;