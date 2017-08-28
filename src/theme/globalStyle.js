import { injectGlobal } from "styled-components";

/* eslint-disable */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=VT323');
  body {
    font-family: 'VT323', monospace;
    font-size: 24px;
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
