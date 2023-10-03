import styled from "styled-components";


type CardItemWrapperProps = {
  $padding?: string;
  $margin?: string;
  $alignItems?: string;
};

export const CardItemWrapper = styled.div<CardItemWrapperProps>`
  display: flex;
  padding: ${(props) => props.$padding};
  margin: ${(props) => props.$margin};
  align-items: ${(props) => props.$alignItems};
`;

type CardListBarProps = {
  width?: string;
  $bgc?: string;
  $isAbsolute?: boolean;
};

export const CardListBar = styled.div<CardListBarProps>`
  height: 5px;
  width: ${(props) => props.width};
  background-color: ${(props) => (props.$bgc ? props.theme.color[props.$bgc] : 'none')};
  border-radius: 5px;
  position: ${(props) => (props.$isAbsolute ? 'absolute' : 'relative')};
  top: 0;
  left: 0;
`

export const BenefitBtn = styled.div`
    display: flex;
    justify-content: space-around;
    border-radius: 16px;
    padding: 8px;
    background-color: ${(props) => props.theme.color.grey4};
    margin: 0 8px 0 0;
    height: 32px;
    width: auto;
`
