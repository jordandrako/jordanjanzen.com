// import { css } from 'styled-components';

export const screenSizesPx = {
  desktop: 1100,
  giant: 1400,
  phone: 480,
  tablet: 930,
};

export const screenSizes = {
  desktop: `${screenSizesPx.desktop / 16}em`,
  giant: `${screenSizesPx.giant / 16}em`,
  phone: `${screenSizesPx.phone / 16}em`,
  tablet: `${screenSizesPx.tablet / 16}em`,
};

// These utilities aren't working with typescript.
// iterate through the sizes and create a media template
// export const mediaMax = Object.keys(screenSizes).reduce(
//   (accumulator, label) => {
//     const emSize = screenSizes[label] / 16;
//     accumulator[label] = (...args: any[]) => css`
//       @media (max-width: ${emSize}em) {
//         ${/* css(...args) */ ''};
//       }
//     `;
//     return accumulator;
//   },
//   {},
// );

// export const mediaMin = Object.keys(screenSizes).reduce(
//   (accumulator, label) => {
//     const emSize = screenSizes[label] / 16;
//     accumulator[label] = (...args: any[]) => css`
//       @media (min-width: ${emSize}em) {
//         ${/* css(...args) */ ''};
//       }
//     `;
//     return accumulator;
//   },
//   {},
// );
