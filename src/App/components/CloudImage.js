import React from 'react';
// import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { adjustHue, transparentize } from 'polished';

import { colors } from '../../styling';

const Image = styled.div`
  background: ${(props) =>
      props.dim
        ? `linear-gradient(135deg,
          ${transparentize(0.5, `${adjustHue(-30, colors.blue)}`)} 0%,
          ${transparentize(0.5, `${colors.blue}`)}
          100%),`
        : null}
    url(${(props) => props.background}) no-repeat;
  background-size: cover;
  background-position: center top;
  width: 100%;
  height: 100%;
  border: ${(props) => (props.border ? `3px solid ${colors.black}` : 'none')};
  border-radius: ${(props) => {
    if (props.radius === 'max') {
      return '50%';
    }
    return '0';
  }};
`;

const Img = styled.img`
  border: ${(props) => (props.border ? `3px solid ${colors.black}` : 'none')};
  border-radius: ${(props) => {
    if (props.radius === 'max') {
      return '50%';
    }
    return '0';
  }};
  cursor: ${(props) => (props.link ? 'pointer' : null)};
  ${(props) => {
    if (props.align) {
      return `float: ${props.align}; margin-bottom: 1em;`;
    }
  }};
  ${(props) => {
    if (props.align === 'left') {
      return `margin-right: 1em;`;
    }
    if (props.align === 'right') {
      return `margin-left: 1em;`;
    }
  }};
`;

export const CloudImage = (props) => {
  const {
    name,
    publicId,
    format,
    width,
    height,
    crop,
    background,
    gravity,
    opacity,
    angle,
    radius,
    bo,
    effects,
    border,
    align,
    children
  } = props;

  const url = `https://res.cloudinary.com/jordan-janzen/image/upload/w_${width},h_${height},c_${crop},g_${gravity},o_${opacity},a_${angle},r_${radius}${bo
    ? `,bo_${bo}`
    : ''}${background ? `,b_${background}` : ''}/${effects
    ? `${effects}/`
    : ''}${publicId}.${format}`;

  if (children) {
    return (
      <Image
        background={url}
        dim={props.dim}
        border={props.border}
        className="cloud-image"
        style={props.style}
      >
        {children}
      </Image>
    );
  }

  return (
    <Img
      src={url}
      alt={name}
      border={border}
      align={align}
      {...props}
      onClick={() =>
        props.link
          ? window.open(
              `https://res.cloudinary.com/jordan-janzen/image/upload/${publicId}.${format}`
            )
          : null}
    />
  );
};

CloudImage.propTypes = {
  name: PropTypes.string.isRequired,
  publicId: PropTypes.string.isRequired,
  format: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  crop: PropTypes.oneOf([
    'scale',
    'fit',
    'mfit',
    'fill',
    'lfill',
    'limit',
    'pad',
    'lpad',
    'mpad',
    'crop',
    'thumb',
    'imagga_crop',
    'imagga_scale'
  ]),
  background: PropTypes.string,
  gravity: PropTypes.oneOf([
    'center',
    'south',
    'north',
    'east',
    'west',
    'south_east',
    'south_west',
    'north_east',
    'north_west',
    'face',
    'face:center',
    'faces',
    'faces:auto',
    'faces:center'
  ]),
  opacity: PropTypes.string,
  angle: PropTypes.string,
  radius: PropTypes.string,
  bo: PropTypes.string,
  effects: PropTypes.string,
  children: PropTypes.node,
  dim: PropTypes.bool,
  link: PropTypes.bool,
  border: PropTypes.bool,
  align: PropTypes.string,
  style: PropTypes.object
};

CloudImage.defaultProps = {
  format: 'jpg',
  width: 'iw',
  height: 'ih',
  crop: 'limit',
  gravity: 'center',
  opacity: '100',
  angle: '0',
  radius: '0',
  bo: null,
  effects: null,
  background: null,
  children: null,
  dim: false,
  link: false,
  border: true,
  align: null,
  style: null
};

export default CloudImage;
