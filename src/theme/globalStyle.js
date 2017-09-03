import { injectGlobal } from 'styled-components';

/* eslint-disable */
injectGlobal`
  @font-face {
    font-family: "FiraCode";
    src: url("./fonts/FiraCode/distr/eot/FiraCode-Regular.eot");
    src: url("./fonts/FiraCode/distr/eot/FiraCode-Regular.eot?#iefix")
        format("embedded-opentype"),
      url("./fonts/FiraCode/distr/woff/FiraCode-Regular.woff") format("woff"),
      url("./fonts/FiraCode/distr/ttf/FiraCode-Regular.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
    font-feature-settings: "calt" 1;
  }

  @font-face {
    font-family: "FiraCode";
    src: url("./fonts/FiraCode/distr/eot/FiraCode-Bold.eot");
    src: url("./fonts/FiraCode/distr/eot/FiraCode-Bold.eot?#iefix")
        format("embedded-opentype"),
      url("./fonts/FiraCode/distr/woff/FiraCode-Bold.woff") format("woff"),
      url("./fonts/FiraCode/distr/ttf/FiraCode-Bold.ttf") format("truetype");
    font-weight: bold;
    font-style: normal;
    font-feature-settings: "calt" 1;
  }

  @font-face {
    font-family: "FiraCode";
    src: url("./fonts/FiraCode/distr/eot/FiraCode-Light.eot");
    src: url("./fonts/FiraCode/distr/eot/FiraCode-Light.eot?#iefix")
        format("embedded-opentype"),
      url("./fonts/FiraCode/distr/woff/FiraCode-Light.woff") format("woff"),
      url("./fonts/FiraCode/distr/ttf/FiraCode-Light.ttf") format("truetype");
    font-weight: lighter;
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
