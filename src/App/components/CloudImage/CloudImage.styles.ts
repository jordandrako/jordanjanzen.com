import { adjustHue, transparentize } from 'polished';
import { palette, semanticColors, styled } from 'styling';
import { ICloudImageStyleProps } from './CloudImage.types';

const borderSize = '3px';

export const imageContainer = styled.div`
  background: ${(props: ICloudImageStyleProps) =>
    props.dim
      ? `linear-gradient(135deg,
          ${transparentize(0.5, `${adjustHue(-30, palette.blue)}`)} 0%,
          ${transparentize(0.5, `${palette.blue}`)}
          100%), url(${props.background});`
      : `url(${props.background})`};
  background-size: cover;
  background-position: center top;
  width: 100%;
  /* height: 100%; */
  border: ${(props: ICloudImageStyleProps) =>
    props.border
      ? `${borderSize} solid ${semanticColors.imageBorder}`
      : 'none'};
  ${(props: ICloudImageStyleProps) => {
    if (props.radius === 'max') {
      return `
        border-radius: 50%;
        background: ${props.border ? semanticColors.imageBorder : undefined};
      `;
    }
    return '';
  }};
`;

export const image = styled.img`
  border: ${(props: ICloudImageStyleProps) =>
    props.border
      ? `${borderSize} solid ${semanticColors.imageBorder}`
      : 'none'};
  ${(props: ICloudImageStyleProps) => {
    if (props.radius === 'max') {
      return `
        border-radius: 50%;
        background: ${props.border ? semanticColors.imageBorder : undefined};
      `;
    }
    return '';
  }}
  cursor: ${(props: ICloudImageStyleProps) =>
    props.link ? 'pointer' : 'unset'};
  ${(props: ICloudImageStyleProps) => {
    if (props.align) {
      return `float: ${props.align}; margin-bottom: 1em;`;
    }
    return '';
  }};
  ${(props: ICloudImageStyleProps) => {
    if (props.align === 'left') {
      return `margin-right: 1em;`;
    }
    if (props.align === 'right') {
      return `margin-left: 1em;`;
    }
    return '';
  }};
`;
