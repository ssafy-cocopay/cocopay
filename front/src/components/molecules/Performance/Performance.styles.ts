import styled from "styled-components";

export const PerformanceWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 28px;
    background-color: ${(props) => props.theme.color.grey4};
    border-radius: 10px;
    position: relative;
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
    position: ${(props) => props.$position || 'absolute'};  // 변경
    left: ${(props) => props.$left || 'unset'};            // 추가
    right: ${(props) => props.$bgc === 'grey2' ? '0' : 'unset'}; // 추가
    z-index: ${(props) => props.$zIndex};
`;

type BarWrapperProps = {
    $position?: string;
}

export const BarWrapper = styled.div<BarWrapperProps>`
    position: absolute;  // 변경
    left: 0;             // 추가
    width: 100%;         // 추가 (선택적)
    display: flex;
`;