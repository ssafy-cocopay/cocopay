import styled from "styled-components";

export const CategoryMenuBox = styled.div`
  font-weight: 700;
  font-size: 1.6rem;
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const DropDownBoxWrap = styled.div`
  height: 152px;
  display: inline-block;
  width: 7.5rem;
`;

export const DropDownContainer = styled.ul`
  width: 100%;
  height: 100%;
  display: inline-flex;
  flex-direction: column;
  list-style: none;
  overflow-y: scroll;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  list-style: none;
  padding: 1rem;
  z-index: 1;
  margin-top: 0.2rem;
`;
