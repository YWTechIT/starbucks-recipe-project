import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Bazier Square, Noto Sans KR, Segoe UI, Apple SD Gothic Neo, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1;
    font-weight: 400;
  }
  html{
    font-size: 10px;
  }

  body {
    height: 100%;
  }

  button {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
  }
  a, a:hover, a:focus, a:active {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }
  img {
    max-width: 100%;
    display: block;
  }
  ul, li {
  list-style: none;
  text-decoration: none;
  margin: 0;
  padding: 0; 
}

  h1{
    font-size: 48px;
  }
  h2{
    font-size: 26px;
    font-weight: bold;
  }
  h3{
    font-size: 22px;
  }
  h4{
    font-size: 19px;
  }
`;

export default GlobalStyle;
