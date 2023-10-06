import styled from "styled-components";

export const PurchasedWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative; 
    width: 100%;
    margin-bottom: 20px;

    & > img { 
        position: absolute;
        left: 0; 
    }

    & > div { 
        text-align: center;
    }
`;

export const Hr = styled.hr`
  border: none;
  border-top: 2px solid ${(props) => props.theme.color.grey4};
`;

export const ModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`