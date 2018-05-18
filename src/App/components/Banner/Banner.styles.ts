import { transparentize } from 'polished';
import { fonts, palette, styled } from '../../../styling';
import Button from '../Button';
import { BannerType, IBannerStyleProps } from './Banner.types';

const bannerColor = (props: IBannerStyleProps): string => {
  const type = props.bannerType;
  switch (type) {
    case BannerType.Alert:
      return palette.lightyellow;
    case BannerType.Success:
      return palette.green;
    case BannerType.Danger:
      return palette.red;
    default:
      return palette.lightblack;
  }
};

export const root = styled.div`
  background: ${(props: IBannerStyleProps) =>
    transparentize(0.75, bannerColor(props))};
  padding: 1em 2em 1em 1em;
  margin: 0 0 1.5em;
  border-radius: 0.25em;
  box-shadow: inset 0 0 0 3px ${bannerColor};
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
  }

  &.exited {
    overflow-y: auto;
  }

  h4 {
    margin-top: 0;
  }

  &.closed {
    h4 {
      margin: 0;
    }
  }
`;

export const showHide = styled.button`
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

  .entered & .vertical {
    transform: rotate(90deg);
  }
`;

export const actionButton = styled(Button)`
  background: transparent;
  border: 2px solid ${palette.black};
  font-family: ${fonts.monospace};
  padding: 0.4em 1em;
`;
