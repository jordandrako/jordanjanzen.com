import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './Button';

import { toTitleCase } from '../helpers';

const A = styled.a`
  text-decoration: none;
  color: inherit;
`;

const SocialButton = (props) => {
  const social = props.social;
  let link;
  let text;
  let bg;
  let color;

  if (social === 'github') {
    link = 'https://github.com/jordandrako';
    text = toTitleCase(social);
    bg = '#4078c0';
    color = '#fff';
  } else if (social === 'codepen') {
    link = 'https://codepen.io/jordandrako/';
    text = toTitleCase(social);
    bg = '#0ebeff';
    color = '#fff';
  } else if (social === 'facebook') {
    link = 'https://www.facebook.com/jordancjanzen';
    text = toTitleCase(social);
    bg = '#3b5998';
    color = '#fff';
  } else if (social === 'google') {
    link = 'https://plus.google.com/u/0/+JordanJanzen1';
    text = toTitleCase(social);
    bg = '#dd4b39';
    color = '#fff';
  } else if (social === 'twitter') {
    link = 'https://twitter.com/jordancjanzen';
    text = toTitleCase(social);
    bg = '#1da1f2';
    color = '#fff';
  } else if (social === 'linkedin') {
    link = 'https://www.linkedin.com/in/jordancjanzen/';
    text = toTitleCase(social);
    bg = '#0077b5';
    color = '#fff';
  }

  return (
    <A href={link} target="_blank">
      <Button type="primary" bg={bg} color={color} wide={props.wide}>
        <i className={`fa fa-${social}`} aria-hidden="true" /> {text}
      </Button>
    </A>
  );
};

SocialButton.propTypes = {
  social: PropTypes.oneOf([
    'github',
    'codepen',
    'facebook',
    'twitter',
    'google',
    'linkedin',
  ]).isRequired,
  wide: PropTypes.bool,
};

SocialButton.defaultProps = {
  wide: false,
};

export default SocialButton;
