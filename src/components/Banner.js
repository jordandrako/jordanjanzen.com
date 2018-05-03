import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';

import { palette, fonts } from '../theme/theme';
import { toTitleCase } from '../helpers';

const Alert = styled.div`
  background: ${(props) => {
    const type = props.type;
    if (type === 'alert') {
      return palette.lightyellow;
    } else if (type === 'success') {
      return palette.green;
    } else if (type === 'error') {
      return palette.red;
    }
    return palette.lightblack;
  }};
  padding: 1em 2em 1em 1em;
  margin: 0 0 1.5em;
  border-radius: 0.25em;
  border: inset solid 3px rgba(255, 255, 255, 0.5);
  font-family: ${fonts.monospace};
  position: relative;
  height: auto;
  overflow: hidden;
  max-height: 400px;

  transition: all 0.2s ease-in-out;

  &.entering {
    max-height: 400px;
  }

  &.entered {
    max-height: 3.5em;
    .showHide {
      .vertical {
        transform: rotate(90deg);
      }
    }
  }

  .showHide {
    position: absolute;
    top: 1em;
    right: 1em;
    width: 1.5em;
    height: 1.5em;
    padding: 0;
    border: 2px solid ${palette.black};
    border-radius: 50%;
    background: transparent;
    span {
      display: block;
      position: absolute;
      width: 80%;
      height: 3px;
      background: ${palette.black};
      transition: all 0.1s ease-in-out;
      transform-origin: 50% 50%;
      left: 10%;
      top: 50%;
      margin-top: -1.5px;
    }
  }

  h4 {
    margin-top: 0;
  }

  .actionButton {
    background: transparent;
    border: 2px solid ${palette.black};
    font-family: ${fonts.monospace};
    padding: 0.4em 1em;
  }

  &.closed {
    h4 {
      margin: 0;
    }
    .showHide {
      .vertical {
        transform: rotate(90deg);
      }
    }
  }
`;

class Banner extends Component {
  constructor() {
    super();
    this.showHide = this.showHide.bind(this);

    this.state = {
      closed: false,
    };
  }

  showHide() {
    this.setState({
      closed: !this.state.closed,
    });
  }

  render() {
    const closed = this.state.closed;
    const showHideButton = (
      <button className="showHide" onClick={this.showHide}>
        <span className="horizontal" />
        <span className="vertical" />
      </button>
    );

    const bannerContent = <p>{this.props.children}</p>;

    return (
      <Transition timeout={200} in={closed}>
        {(status) => (
          <Alert type={this.props.type} className={status}>
            <h4>
              {this.props.title
                ? this.props.title
                : `${toTitleCase(this.props.type)} Message`}
            </h4>
            {showHideButton}
            {bannerContent}
          </Alert>
        )}
      </Transition>
    );
  }
}

Banner.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  title: PropTypes.string,
};

Banner.defaultProps = {
  type: 'info',
  title: null,
};

export default Banner;
