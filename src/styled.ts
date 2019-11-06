import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
  }
  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,600&display=swap');
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    font-size: 1.4rem;
    font-weight: 300;
  }
  h1,h2,h3,h4,h5,h6 {
    margin: 0;
  }
`;
