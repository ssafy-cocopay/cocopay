import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const CardWrapper = styled.div`
    padding: 0 28px;
`

export const Hr = styled.hr`
  border: none;
  border-top: 2px solid ${(props) => props.theme.color.grey4};
`;