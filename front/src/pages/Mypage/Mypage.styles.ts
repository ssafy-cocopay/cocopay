import styled from "styled-components";

export const MypageWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Checkbox = styled.input`
  width: 30px;
  height: 12px;
  background: white;
  border-radius: 12px;
  margin-right: 12px;
  &::before {
    content: "";
    text-align: center;
    line-height: 18.75px;
    width: 37.5px;
    height: 18.75px;
    display: block;
    position: absolute;
    border-radius: 11.25px;
    background-color: white;
    box-shadow: 0 0 6px 1.125px rgba(0, 0, 0, 0.15);
    transition: all 0.2s ease-in;
    cursor: pointer;
  }
  &::after {
    content: "";
    display: block;
    position: relative;
    width: 15px;
    height: 15px;
    top: 1.875px;
    left: 1.875px;
    border-radius: 50%;
    background: #838383;
    transition: all 0.2s ease-in;
  }
  &:checked {
    &::before {
      background-color: #838383;
    }
    &::after {
      background-color: white;
      left: calc(100% - 9.375px);
    }
  }
`