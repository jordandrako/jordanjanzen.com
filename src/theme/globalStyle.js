import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';

import { getTheme, loadTheme } from './variables';
import { mediaMax } from './style-utils';
import FiraCode from './fonts/FiraCode-Regular.ttf';

// /* eslint-disable */
const globalStyle = (theme) => {
  let newTheme = getTheme();
  if (theme) {
    newTheme = loadTheme(theme);
  }
  const { fonts, semanticColors } = newTheme;

  return injectGlobal`
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
      font-family: ${fonts.fontFamily};
      color: ${semanticColors.textColor};
      background: ${semanticColors.siteBackground};
      line-height: 1.6;
      ${mediaMax.tablet`font-size: 16px`};
      margin: 0;
      padding: 0;
    }

    img {
      max-width: 100%;
    }

    h1, h2, h3, h4, h5 {
      letter-spacing: .067em;
    }

    h1, h2, h3, h4, h5, p {
      margin-top: .1em;
      margin-bottom: .8em;
    }

    a {
      color: ${semanticColors.textColor};
      text-decoration: none;
      border-bottom: 2px solid ${semanticColors.secondaryColor};
    }
  `;
};

export default globalStyle;
