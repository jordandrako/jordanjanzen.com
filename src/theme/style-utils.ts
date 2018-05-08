import { css } from "styled-components";

export const sizes = {
  desktop: 1100,
  giant: 1400,
  phone: 480,
  tablet: 930
};

// iterate through the sizes and create a media template
// export const mediaMax = Object.keys(sizes).reduce((accumulator, label) => {
//   const emSize = sizes[label] / 16;
//   accumulator[label] = (args: TemplateStringsArray) => css`
//     @media (max-width: ${emSize}em) {
//       ${css(args)};
//     }
//   `;
//   return accumulator;
// }, {});

// export const mediaMin = Object.keys(sizes).reduce((accumulator, label) => {
//   const emSize = sizes[label] / 16;
//   accumulator[label] = (args: TemplateStringsArray) => css`
//     @media (min-width: ${emSize}em) {
//       ${css(args)};
//     }
//   `;
//   return accumulator;
// }, {});

export const mediaMin = {
  desktop: (...args) => css`
    @media (min-width: ${sizes.desktop}) {
      ${ css(...args)}
    }
  `,
  giant: (...args) => css`
    @media (min-width: ${sizes.giant / 16}em) {
      ${ css(...args)}
    }
  `,
  phone: (...args) => css`
    @media (min-width: ${sizes.phone / 16}em) {
      ${ css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media (min-width: ${sizes.tablet / 16}em) {
      ${ css(...args)}
    }
  `,
}

export const mediaMax = {
  desktop: (...args) => css`
    @media (max-width: ${sizes.desktop / 16}em) {
      ${ css(...args)}
    }
  `,
  giant: (...args) => css`
    @media (max-width: ${sizes.giant / 16}em) {
      ${ css(...args)}
    }
  `,
  phone: (...args) => css`
    @media (max-width: ${sizes.phone / 16}em) {
      ${ css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media (max-width: ${sizes.tablet / 16}em) {
      ${ css(...args)}
    }
  `,
}