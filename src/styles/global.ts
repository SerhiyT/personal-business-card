import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';

type Props = {
  theme: Theme;
};
const GlobalStyle = createGlobalStyle<Props>`
  @import '~bootstrap/dist/css/bootstrap.min.css';
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap');

  html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }) => theme?.colors?.green2};
    font-family:'Roboto', sans-serif;
    font-size:  20px;
    line-height: 1.3;

    @media (max-width: 480px) {
      font-size: 18px;
    }
  }

  html {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme?.colors?.green2} ${({ theme }) =>
  theme?.colors?.black};;
  }
  body::-webkit-scrollbar {
    width: 10px;
  }
  body::-webkit-scrollbar-track {
    background: ${({ theme }) => theme?.colors?.black};;
  }
  body::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme?.colors?.green2};
    border: 3px solid ${({ theme }) => theme?.colors?.black};;
    border-radius: 10px;
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;

    &.fillNone {
      fill: none;
    }
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    &.inline-link {
      ${({ theme }) => theme?.mixins?.inlineLink};
    }
  }
`;

export default GlobalStyle;
