import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 28px;
    background-color: ${(props) => props.theme.color.grey4};
    border-radius: 10px;
`

type LevelProps = {
    bgc?: string;
}

export const Level = styled.div<LevelProps>`
    width: 28px;
    height: 28px;
    background-color: ${(props) => props.theme.color[props.bgc ?? 'grey1']};
    border-radius: 10px;
`;
