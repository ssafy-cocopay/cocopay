import styled from "styled-components";

export const PerformanceWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 28px;
    background-color: ${(props) => props.theme.color.grey4};
    border-radius: 10px;
`

type LevelProps = {
    $bgc?: string;
    width?: string;
    height?: string;
    $position?: string;
    $left?: string;
    $zIndex?: string;
}

export const Level = styled.div<LevelProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: ${(props) => props.theme.color[props.$bgc ?? 'grey1']};
    border-radius: 10px;
    position: ${(props) => props.$position};
    left: ${(props) => props.$left};
    z-index: ${(props) => props.$zIndex};
`;

type BarWrapperProps = {
    $position?: string;
}

export const BarWrapper = styled.div<BarWrapperProps>`
    display: flex;
    position: ${(props) => props.$position};
`