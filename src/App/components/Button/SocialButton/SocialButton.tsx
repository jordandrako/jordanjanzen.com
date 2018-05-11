import * as React from 'react';
import { ISocialButton, SocialSites } from '../../Button';
import * as Styled from './SocialButton.styles';

export const SocialButton = (props: ISocialButton) => {
  const social = props.social;
  let link;
  let text;
  let bg;
  let color;

  if (social === SocialSites.github) {
    link = 'https://github.com/jordandrako';
    text = 'GitHub';
    bg = '#4078c0';
    color = '#fff';
  } else if (social === SocialSites.codepen) {
    link = 'https://codepen.io/jordandrako/';
    text = 'CodePen';
    bg = '#0ebeff';
    color = '#fff';
  } else if (social === SocialSites.facebook) {
    link = 'https://www.facebook.com/jordancjanzen';
    text = 'Facebook';
    bg = '#3b5998';
    color = '#fff';
  } else if (social === SocialSites.google) {
    link = 'https://plus.google.com/u/0/+JordanJanzen1';
    text = 'Google';
    bg = '#dd4b39';
    color = '#fff';
  } else if (social === SocialSites.twitter) {
    link = 'https://twitter.com/jordancjanzen';
    text = 'Twitter';
    bg = '#1da1f2';
    color = '#fff';
  } else if (social === SocialSites.linkedin) {
    link = 'https://www.linkedin.com/in/jordancjanzen/';
    text = 'LinkedIn';
    bg = '#0077b5';
    color = '#fff';
  }

  return (
    <Styled.root
      href={link}
      target="_blank"
      small={true}
      bg={bg}
      color={color}
      {...props}
    >
      <span>
        <i className={`fa social fa-${social}`} aria-hidden="true" /> {text}
      </span>
    </Styled.root>
  );
};
