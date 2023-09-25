import styled from "styled-components";

type PayOnlineWrapperProps = {
    height?: string;
    $borderRadius?: string;
    $margin?: string;
    $bgc?: string;
    $padding?: string;
  };

export const PayOnlineWrapper = styled.div<PayOnlineWrapperProps>`
    height: ${(props) => props.height};
    width: 100%;
    background-color: ${(props) => props.$bgc || props.theme.color.blue};
    border-radius: ${(props) => props.$borderRadius};
    padding: ${(props) => props.$padding};
    margin: ${(props) => props.$margin};
`

export const DisplayWrapper = styled.div`
  display: flex;
`

type CardListBarProps = {
  width?: string;
  $bgc?: string;
  $isAbsolute?: boolean;
};

export const CardListBar = styled.div<CardListBarProps>`
  height: 10px;
  width: ${(props) => props.width};
  background-color: ${(props) => (props.$bgc ? props.theme.color[props.$bgc] : 'none')};
  border-radius: 5px;
  position: ${(props) => (props.$isAbsolute ? 'absolute' : 'relative')};
  top: 0;
  left: 0;
`

export const StyledModal = styled.div<{ $IsOpen: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 0;
  overflow: hidden;
  background-color: #ffffff;
  transition: height 0.5s ease-in-out;
  border-radius: 38px 38px 0 0;
  z-index: 1000;  // 모달의 z-index를 오버레이보다 높게 설정
  padding: 16px 16px 28px 16px;

  ${(props) => props.$IsOpen && `
    height: 420px;
    width: 100%;
  `}
`;

export const Overlay = styled.div<{ $IsOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);  // 반투명한 검은색
  display: ${(props) => (props.$IsOpen ? 'block' : 'none')};
  z-index: 999;  // 여전히 높지만, 모달보다는 낮은 z-index
`;

export const Hr = styled.hr`
  margin: 0 148px 28px 148px;
  border: none; // 기본 border를 제거합니다.
  border-top: 5px solid ${(props) => props.theme.color.grey4}; // 두께와 색상을 설정합니다.
`;
