import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './Button';

const IconButton = styled(Button)`
  display: flex;
  justify-content: space-between;
`;

const SocialButton = (props) => {
  const social = props.social;
  let link;
  let text;
  let bg;
  let color;

  if (social === 'github') {
    link = 'https://github.com/jordandrako';
    text = 'GitHub';
    bg = '#4078c0';
    color = '#fff';
  } else if (social === 'codepen') {
    link = 'https://codepen.io/jordandrako/';
    text = 'CodePen';
    bg = '#0ebeff';
    color = '#fff';
  } else if (social === 'facebook') {
    link = 'https://www.facebook.com/jordancjanzen';
    text = 'Facebook';
    bg = '#3b5998';
    color = '#fff';
  } else if (social === 'google') {
    link = 'https://plus.google.com/u/0/+JordanJanzen1';
    text = 'Google';
    bg = '#dd4b39';
    color = '#fff';
  } else if (social === 'twitter') {
    link = 'https://twitter.com/jordancjanzen';
    text = 'Twitter';
    bg = '#1da1f2';
    color = '#fff';
  } else if (social === 'linkedin') {
    link = 'https://www.linkedin.com/in/jordancjanzen/';
    text = 'LinkedIn';
    bg = '#0077b5';
    color = '#fff';
  }

  return (
    <IconButton
      href={link}
      target="_blank"
      small
      bg={bg}
      color={color}
      {...props}
    >
      <i className={`fa social fa-${social}`} aria-hidden="true" /> {text}
    </IconButton>
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
