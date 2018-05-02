import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Observer extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
      hasBeenVisible: false
    };
    this.io = null;
    this.container = null;
  }
  componentDidMount() {
    this.io = new IntersectionObserver(([entry]) => {
      this.setState({ isVisible: entry.isIntersecting });
      if (this.state.isVisible) {
        this.setState({ hasBeenVisible: true });
      }
    }, {});
    this.io.observe(this.container);
  }
  componentWillUnmount() {
    if (this.io) {
      this.io.disconnect();
    }
  }

  componentWillReceiveNewProps(newProps) {
    if (!this.state.hasBeenVisible && newProps.isVisible) {
      this.setState({ hasBeenVisible: true });
    }
  }
  render() {
    return (
      // we create a div to get a reference.
      // It's possible to use findDOMNode() to avoid
      // creating extra elements, but findDOMNode is discouraged
      <div
        ref={(div) => {
          this.container = div;
        }}
      >
        {Array.isArray(this.props.children)
          ? this.props.children.map((child) =>
              child(this.state.isVisible, this.state.hasBeenVisible)
            )
          : this.props.children(
              this.state.isVisible,
              this.state.hasBeenVisible
            )}
      </div>
    );
  }
}

Observer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.any),
    PropTypes.any
  ])
};

Observer.defaultProps = {
  children: null
};

export default Observer;
