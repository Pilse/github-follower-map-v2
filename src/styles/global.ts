import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  #root {
    display: flex;
    width: 450px;
    height: 100vh;
    margin: auto;
  }

  font-family: 'Noto Sans KR';
  font-weight: 400;
`;

export default GlobalStyle;
