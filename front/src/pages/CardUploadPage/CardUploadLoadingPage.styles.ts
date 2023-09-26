import styled from "styled-components";

export const LoadingWrapper = styled.div`
    height: 522px;
    background-color: ${(props) => props.theme.color.white};
    border-radius: 38px;
    padding: 68px 24px 0 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100%; // 이를 통해 부모 컴포넌트의 너비를 전체로 채웁니다.
    overflow: hidden; // 이 속성을 사용하여 자식 요소가 이 컴포넌트의 경계를 넘어가면 잘라냅니다.
`