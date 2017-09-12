import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { theme, typography } from '../theme/variables';

const a = styled.a`
  text-decoration: none;
  color: ${theme.linkColor};
`;

const BtnColor = props => props.color || theme.buttonText;

const Btn = styled.button`
  border: none;
  padding: ${props => (props.arrows ? '0.25em 0.8em 0.25em 1.5em' : '.25em .7em')};
  position: relative;
  color: ${BtnColor};
  font-family: ${typography.monospace};
  background: ${theme.buttonColor};
  width: ${props => (props.wide ? '100%' : 'auto')};
  font-size: ${(props) => {
    if (props.small) {
      return '.8rem';
    } else if (props.large) {
      return '1.7rem';
    }
    return '1.1rem';
  }};
  index: 10;

  :before {
    content: '';
    display: ${props => (props.arrows ? 'block' : 'none')};
    position: absolute;
    top: 50%;
    left: -.6em;
    width: 1.2em;
    height: 1.2em;
    -webkit-transform: translateY(-50%) rotate(45deg);
    transform: translateY(-50%) rotate(45deg);
    transition: 0.2s ease-in;
    background: ${BtnColor};
    index: 9;
  }
  :after {
    content: '';
    display: ${props => (props.arrows ? 'block' : 'none')};
    position: absolute;
    top: 50%;
    right: -.6em;
    width: 1.2em;
    height: 1.2em;
    -webkit-transform: translateY(-50%) rotate(45deg);
    transform: translateY(-50%) rotate(45deg);
    transition: 0.2s ease-in;
    background: ${theme.buttonColor};
    index: 9;
  }
`;

const Button = props => (
  <a href={props.type === 'login' ? '' : props.href}>
    <Btn
      type={props.type}
      wide={props.wide}
      small={props.small}
      large={props.large}
      color={props.color}
      arrows={props.arrows}
    >
      {props.text}
    </Btn>
  </a>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  href: PropTypes.string,
  small: PropTypes.bool,
  large: PropTypes.bool,
  wide: PropTypes.bool,
  arrows: PropTypes.bool,
};

Button.defaultProps = {
  color: theme.buttonText,
  href: '#',
  small: false,
  large: false,
  wide: false,
  arrows: false,
};

export default Button;
