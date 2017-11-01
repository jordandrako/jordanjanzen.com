import React from 'react';
// import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { adjustHue, transparentize } from 'polished';

import { colors } from '../theme/variables';

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
  background-position: center center;
  width: 100%;
  height: 100%;
`;

const CloudImage = (props) => {
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
    effects,
    children,
  } = props;

  const url = `https://res.cloudinary.com/jordan-janzen/image/upload/w_${width},h_${height},c_${crop},g_${gravity},o_${opacity},a_${angle},r_${radius}${background
    ? `,b_${background}`
    : ''}/${effects ? `${effects}/` : ''}${publicId}.${format}`;

  if (children) {
    return (
      <Image background={url} dim={props.dim} className="cloud-image">
        {children}
      </Image>
    );
  }
  return <img src={url} alt={name} />;
};

CloudImage.propTypes = {
  name: PropTypes.string.isRequired,
  publicId: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired,
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
    'imagga_scale',
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
    'faces:center',
  ]),
  opacity: PropTypes.string,
  angle: PropTypes.string,
  radius: PropTypes.string,
  effects: PropTypes.string,
  children: PropTypes.node,
  dim: PropTypes.bool,
};

CloudImage.defaultProps = {
  width: 'iw',
  height: 'ih',
  crop: 'scale',
  gravity: 'center',
  opacity: '100',
  angle: '0',
  radius: '0',
  effects: null,
  background: null,
  children: null,
  dim: false,
};

export default CloudImage;
