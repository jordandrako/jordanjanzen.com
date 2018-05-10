import { darken } from 'polished';

import { mediaMax, mediaMin } from '../../styling/style-utils';
import styled from '../../styling/styled-components';
import { palette } from '../../styling/theme';

export const Bottom = styled.footer`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  background: ${darken(0.05, palette.black)};
  justify-content: space-between;

  ${mediaMax.tablet`
    box-shadow: 0 -4px ${darken(0.05, palette.black)};
    flex-grow: 0;
    padding-right: 40px;
    overflow: hidden;
    z-index: 10;
  `};
`;

export const OverflowButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 10px;
  height: 50px;
  padding: 0.75em 1em;
  display: flex;
  background: transparent;
  border: none;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  outline: none;

  span {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${palette.lightwhite};
  }
`;

export const ClickOutside = styled.div`
  display: none;

  ${mediaMax.tablet`
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    width: 100%;
  `};
`;

export const OverflowMenu = styled.div`
  background: ${palette.black};
  position: absolute;
  bottom: 54px;
  right: -60px;
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    padding: 1em;

    li {
      margin-bottom: 0.5em;
    }
  }

  &.entering,
  &.exited {
    right: -60px;
    opacity: 0;
  }

  &.entered,
  &.exiting {
    right: 0;
    opacity: 1;
  }

  ${mediaMin.tablet`
    position: relative;
    bottom: auto;
    padding: 0;
    background: transparent;
  `};
`;
