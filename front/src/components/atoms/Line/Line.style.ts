import styled from "styled-components";

type LineProps = {
  margin?: string;
};

export const Line = styled.hr<LineProps>`
  margin: ${(props) => props.margin};
  width: 100%;
  border-top: 0.05rem solid ${(props) => props.theme.color.grey4};
`;
