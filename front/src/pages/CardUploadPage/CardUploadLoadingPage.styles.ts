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
    width: 100%;
    overflow: hidden;
`