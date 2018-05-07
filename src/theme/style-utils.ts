import { css } from "styled-components";

export const sizes = {
  desktop: 1100,
  giant: 1400,
  phone: 480,
  tablet: 930
};

// iterate through the sizes and create a media template
export const mediaMax = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;
  accumulator[label] = (args: TemplateStringsArray) => css`
    @media (max-width: ${emSize}em) {
      ${css(args)};
    }
  `;
  return accumulator;
}, {});

export const mediaMin = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;
  accumulator[label] = (args: TemplateStringsArray) => css`
    @media (min-width: ${emSize}em) {
      ${css(args)};
    }
  `;
  return accumulator;
}, {});
