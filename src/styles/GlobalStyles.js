import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    --black: #333333;
    --offWhite: rgba(255, 255, 255, 0.5);
    --white: #fff;
    --lightgrey: #C2C3C0;
    --lightgray: var(--lightgrey);
    --darkblue: #325F9A;
    --blue: #C1D3EC;
    --lightblue: #E0E9F5;
    --xlightblue: #EFF4FA;
    --maxWidth: 1024px;
    --maxWidthText: 980px;
    --br: 16px;
    --linearGradient: linear-gradient(127deg, var(--blue), rgb(224, 233, 245, 0) 50%),
                      linear-gradient(336deg, rgb(239, 244, 250, 0), var(--xlightblue) 50%),
                      linear-gradient(217deg, rgb(161, 189, 226, 0), var(--lightblue) 50%);
    box-sizing: border-box;
    font-size: 62.5%;
    --padSm: 3rem;
    --padMd: 8rem 3rem;
    --padLg: 20rem 4rem;
    --trans: all 0.7s ease;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }
  body {
    font-family: 'ApfelGrotezk', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.6rem;
    line-height: 1.5;
    padding: 0;
    margin: 0;
    color: var(--black);
  }
  h1, h2, h3, h4, h5, h6, pre {
    line-height: 1.2;
  }
  h2, h3, h4, h5, h6 {
    max-width: var(--maxWidthText);
  }
  p {
    max-width: var(--maxWidthText);
    margin: 0 auto;
    padding-bottom: 1rem;
  }
  a {
    text-decoration: none;
  }
  *:focus {
      outline: none;
  }
  .btn {
    display: block;
    text-align: center;
    border-radius: 16px;
    background: var(--offWhite);
    color: var(--black);
    padding: 0.5rem 6rem;
    border: 2px solid var(--black);
    text-transform: uppercase;
    font-weight: bold;
    white-space: nowrap;
    transition: var(--trans);
    cursor: pointer;
    &:hover {
      background: var(--black);
      color: var(--white);
    }
  }
  h1, h2 {
    font-size: 2.6rem;
  }
  .btn {
    font-size: 1.6rem;
  }
  .font-lg {
    font-size: 1.7rem;
  }
  .btns-group {
    display: grid;
    grid-gap: 1rem;
  }

  @media (min-width: 640px) {
    body {
      font-size: 1.7rem;
    }
    h1, h2 {
      font-size: 4rem;
    }
    .font-lg {
      font-size: 2rem;
    }
    .btns-group {
      grid-template-columns: 1fr 1fr;
      grid-gap: 2rem;
    }
  }
  @media (min-width: 1024px) {
    body {
      font-size: 1.8rem;
      line-height: 1.6;
    }
    h1 {
      font-size: 5rem;
    }
    .font-lg {
      font-size: 2.4rem;
    }
  }
`;

export default GlobalStyles;
