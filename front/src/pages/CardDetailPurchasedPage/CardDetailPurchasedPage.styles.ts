import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative; // 추가
    width: 100%;
    margin-bottom: 20px;

    & > img { 
        position: absolute;
        left: 0; // 왼쪽으로 보냅니다.
    }

    & > div { // 텍스트
        text-align: center;
    }
`;

export const Hr = styled.hr`
  border: none; // 기본 border를 제거합니다.
  border-top: 2px solid ${(props) => props.theme.color.grey4}; // 두께와 색상을 설정합니다.
`;