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

  html, body {
    min-height: 100%;
  }

  body {
    font-family: ${typography.fontFamily};
    color: ${theme.textColor};
    font-size: 18px;
    margin: 0;
    padding: 0;
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
