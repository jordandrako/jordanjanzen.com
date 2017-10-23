import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CloudImage extends Component {
  render() {
    const { name, id, format, width, height, crop, background, gravity, opacity, angle, radius, effects, children } = this.props;

    const url = `https://res.cloudinary.com/jordan-janzen/image/upload/w_${width},h_${height},c_${crop},g_${gravity},o_${opacity},a_${angle},r_${radius}${background ? `,b_${background}` : ''}/${effects ? `${effects}/` : ''}${id}.${format}`

    if (children) {
      return (
        <div style={{
          background: `url(${url}) no-repeat`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}>
          {children}
        </div>
      )
    }
    return <img src={url} alt={name} />
  }
}


CloudImage.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
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
}

export default CloudImage;