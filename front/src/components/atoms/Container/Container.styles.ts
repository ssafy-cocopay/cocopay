import styled from "styled-components";

type ContainerProps = {
  margin?: string;
  padding?: string;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  max-width: 390px;
  margin: ${(props) => props.margin|| '0 36px'};
  padding: ${(props) => props.padding|| '0 36px'};
`;

export const CardListContainer = styled.div`
  height: 100vh;
  max-width: 390px;
`;



