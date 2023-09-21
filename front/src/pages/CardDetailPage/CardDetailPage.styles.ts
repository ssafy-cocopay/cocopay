import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Layout1 = styled.div`
    width: 340px;
    height: 144px;
    background-color: ${(props) => props.theme.color.white};
    box-shadow: ${(props) => props.theme.shadow.shadow1};
    border-radius: 20px;
    margin: 44px 0 16px 0;
`

export const Layout2 = styled.div`
    width: 340px;
    height: 500px;
    background-color: ${(props) => props.theme.color.white};
    box-shadow: ${(props) => props.theme.shadow.shadow1};
    border-radius: 20px;
`