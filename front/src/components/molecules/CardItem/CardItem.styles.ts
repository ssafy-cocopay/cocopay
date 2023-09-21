import styled from "styled-components";

export const SHr = styled.hr`
  margin: 0 24px;
  border: none;                  // 기본 border를 제거합니다.
  border-top: 2px solid ${(props) => props.theme.color.grey4};  // 두께와 색상을 설정합니다.
`;

export const SLayout = styled.div`
  display: flex;
  margin: 12px 24px;
`

export const SContainer = styled.div`
  display: flex;
`

export const SHamburgerContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0 0 8px;
`