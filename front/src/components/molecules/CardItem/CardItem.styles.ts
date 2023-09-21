import styled from "styled-components";

export const Hr = styled.hr`
  margin: 0 24px;
  border: none;                  // 기본 border를 제거합니다.
  border-top: 2px solid ${(props) => props.theme.color.grey4};  // 두께와 색상을 설정합니다.
`;

export const Layout = styled.div`
  display: flex;
  margin: 12px 24px;
`

export const Container = styled.div`
  display: flex;
`

export const HamburgerContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0 0 8px;
`

type WrapperProps = {
  padding?: string;
}

export const Wrapper = styled.div<WrapperProps>`
padding: ${(props) => props.padding};
`