import styled from '../../styling/styled-components';
import { fonts, palette } from '../../styling/theme';
import { IBannerStyleProps } from './Banner.types';

export const Alert = styled.div`
  background: ${(props: IBannerStyleProps) => {
    const type = props.type;
    if (type === 'alert') {
      return palette.lightyellow;
    } else if (type === 'success') {
      return palette.green;
    } else if (type === 'error') {
      return palette.red;
    }
    return palette.lightblack;
  }};
  padding: 1em 2em 1em 1em;
  margin: 0 0 1.5em;
  border-radius: 0.25em;
  border: inset solid 3px rgba(255, 255, 255, 0.5);
  font-family: ${fonts.monospace};
  position: relative;
  height: auto;
  overflow: hidden;
  max-height: 400px;

  transition: all 0.2s ease-in-out;

  &.entering {
    max-height: 400px;
  }

  &.entered {
    max-height: 3.5em;
    .showHide {
      .vertical {
        transform: rotate(90deg);
      }
    }
  }

  .showHide {
    position: absolute;
    top: 1em;
    right: 1em;
    width: 1.5em;
    height: 1.5em;
    padding: 0;
    border: 2px solid ${palette.black};
    border-radius: 50%;
    background: transparent;
    span {
      display: block;
      position: absolute;
      width: 80%;
      height: 3px;
      background: ${palette.black};
      transition: all 0.1s ease-in-out;
      transform-origin: 50% 50%;
      left: 10%;
      top: 50%;
      margin-top: -1.5px;
    }
  }

  h4 {
    margin-top: 0;
  }

  .actionButton {
    background: transparent;
    border: 2px solid ${palette.black};
    font-family: ${fonts.monospace};
    padding: 0.4em 1em;
  }

  &.closed {
    h4 {
      margin: 0;
    }
    .showHide {
      .vertical {
        transform: rotate(90deg);
      }
    }
  }
`;
