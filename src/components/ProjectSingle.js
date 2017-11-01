import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import CloudImage from './CloudImage';
import Button from './Button';

import { theme } from '../theme/variables';

const ClickOutside = styled(Link)`
  background: rgba(0,0,0,.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  width: 100%;
  z-index: 999;
  border-bottom: 0;
`;

const Single = styled.div`
  position: fixed;
  top: 5vh;
  left: 5vw;
  width: 90vw;
  height: 90vh;
  background: ${theme.siteBackground};
  border: 5px solid red;
  z-index: 1000;
`;

class ProjectSingle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeImageIndex: 0,
      acticeImage: null,
    };
  }

  render() {
    const { index } = this.props;
    // this.setState({
    //   ...this.state,
    //   activeImage: id,
    // });

    return (
      <div key={index}>
        <ClickOutside to="/portfolio/" />
        <Single>
          {/* <CloudImage
            publicId={id}
            format={format}
            crop="crop"
            width="800"
            height="450"
            gravity="center"
            background="rgb:000"
          /> */}
          <Link to="/portfolio"><Button type="delete" /></Link>
        </Single>
      </div>
    );
  }
}

ProjectSingle.propTypes = {
  details: PropTypes.object.isRequired,
  index: PropTypes.string.isRequired,
};

export default ProjectSingle;
