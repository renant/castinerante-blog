import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  ul {
    list-style: none;
  }

  #reactions__container {
    display: none;
  }

  #__next {
    min-width: 100vh;
            }

  body {
    background: #f4f4ed;
    -webkit-font-smoothing: antialised;
  }

  input, button, a {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h5, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
