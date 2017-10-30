import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CloudImage from './CloudImage';

const Single = styled.div`
  position: fixed;
  width: 90vw;
  height: 90vh;
`;

class ProjectSingle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeImageIndex: 0,
      activeImage: Object.keys(this.props.details.images)[
        this.state.activeImageIndex
      ].id,
    };
  }

  render() {
    const { details, index } = this.props;
    const { id, name, format } = Object.keys(details.images)[
      this.state.activeImageIndex
    ];
    this.setState({
      ...this.state,
      activeImage: id,
    });

    return (
      <Single key={index}>
        <CloudImage
          publicId={id}
          format={format}
          name={name}
          crop="crop"
          width="800"
          height="450"
          gravity="center"
          background="rgb:000"
        />
      </Single>
    );
  }
}

ProjectSingle.propTypes = {
  details: PropTypes.object.isRequired,
};

export default ProjectSingle;
