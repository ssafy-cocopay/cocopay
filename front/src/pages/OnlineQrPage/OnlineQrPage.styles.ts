import styled from "styled-components";

export const QrContainer = styled.div`
  background-color: ${(props) => props.theme.color.blue};
  height: 100vh;
  padding: 85px 38px 0 38px;
`

export const QrWrapper = styled.div`
    border: 5px solid ${(props) => props.theme.color.blue};
    border-radius: 20px;
    height: 225px;
    width: 225px;
    display: flex;
    justify-content: center;
    align-items: center;
`