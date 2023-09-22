import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const CardWrapper = styled.div`
    padding: 0 28px;
`

export const Hr = styled.hr`
  border: none; // 기본 border를 제거합니다.
  border-top: 2px solid ${(props) => props.theme.color.grey4}; // 두께와 색상을 설정합니다.
`;