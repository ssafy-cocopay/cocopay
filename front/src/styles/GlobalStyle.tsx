import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        color: ${({ theme }) =>
          theme.color.black1}; // 모든 text의 기본 색상은 black1
        font-family: 'Pretendard';
        /* overflow-y: scroll; */
    }
`;

export default GlobalStyle;
