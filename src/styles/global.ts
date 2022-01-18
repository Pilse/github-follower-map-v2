import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans KR', sans-serif;
    color: black;
    letter-spacing: -0.5px;
  }

  html {
    background-color: #EEEEEE;
    overflow-x: hidden;
  }

  #root {
    width: min(400px, 100vw);
    height: 100vh;
    padding: 16px 0;
    margin: auto;
    background-color: #FFFFFF;
  }

  img, object {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  svg {
    shape-rendering: geometricPrecision;
  }

`;

export default GlobalStyle;
