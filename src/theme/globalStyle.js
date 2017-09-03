import { injectGlobal } from 'styled-components';

/* eslint-disable */
injectGlobal`
  @font-face {
    font-family: "FiraCode";
    src: url("./fonts/FiraCode/distr/eot/FiraCode-Regular.eot");
    src: url("./fonts/FiraCode/distr/eot/FiraCode-Regular.eot?#iefix")
        format("embedded-opentype"),
        url("./fonts/FiraCode/distr/woff2/FiraCode-Regular.woff2") format("woff2"),
      url("./fonts/FiraCode/distr/woff/FiraCode-Regular.woff") format("woff"),
      url("./fonts/FiraCode/distr/ttf/FiraCode-Regular.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
    font-feature-settings: "calt" 1;
  }

  body {
    font-family: 'FiraCode', monospace;
    font-size: 18px;
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
