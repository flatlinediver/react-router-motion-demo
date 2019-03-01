import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif;
    font-weight: 500;
  }
  html{
    width: 100vw;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Quicksand', 'Verdana', "Helvetica", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width:100vw;
  }
`;