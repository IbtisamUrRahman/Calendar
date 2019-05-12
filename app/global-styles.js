import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }
  body {
    font-family: 'sofia-pro', sans-serif;
    font-style: normal;
    font-weight: 300;
  }
  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }
`;

export default GlobalStyle;
