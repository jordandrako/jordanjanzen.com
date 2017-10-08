import { injectGlobal } from 'styled-components';

import { theme, typography } from './variables';
import FiraCode from './fonts/FiraCode-Regular.ttf';

/* eslint-disable */
injectGlobal`
  @font-face {
    font-family: "FiraCode";
    src: url(${FiraCode});
    font-weight: normal;
    font-style: normal;
    font-feature-settings: "calt" 1;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    overflow: hidden;
  }

  body {
    font-family: ${typography.fontFamily};
    color: ${theme.textColor};
    background: ${theme.siteBackground};
    font-size: 18px;
    margin: 0;
    padding: 0;

    &::-webkit-scrollbar {
      width: 1em;
    }

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    &::-webkit-scrollbar-thumb {
      background-color: darkgrey;
      outline: 1px solid slategrey;
    }
  }

  .large {
    display: hidden;
  }

  @media only screen and (min-width: 800px) {
    .mobile {
      display: none;
    }

    .large {
      display: block;
    }
  }
`;

export default injectGlobal;
