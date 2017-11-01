import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';

import { theme, typography } from './variables';
import { mediaMax } from './style-utils';
import FiraCode from './fonts/FiraCode-Regular.ttf';

/* eslint-disable */
injectGlobal`
  ${styledNormalize}

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
    font-size: 17px;
  }

  html, body, #root {
    height: 100%;
    overflow: hidden;
  }

  body {
    font-family: ${typography.fontFamily};
    color: ${theme.textColor};
    background: ${theme.siteBackground};
    line-height: 1.6;
    ${mediaMax.tablet`font-size: 16px`};
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 100%;
  }

  h1, h2, h3, h4, h5, p {
    margin-top: .1em;
    margin-bottom: .8em;
  }

  p {
    max-width: 40em;
  }

  a {
    color: ${theme.textColor};
    text-decoration: none;
    border-bottom: 2px solid ${theme.secondaryColor};

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
