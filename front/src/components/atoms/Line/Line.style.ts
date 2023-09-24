import styled from "styled-components";

type LineProps = {
  margin?: string;
};

export const Line = styled.hr<LineProps>`
  margin: ${(props) => props.margin};
  border: none;
  border-top: 0.1rem solid ${(props) => props.theme.color.grey4};
`;
