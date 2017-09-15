import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShowHide extends Component {
  constructor() {
    super();
    this.state = {
      childVisible: false,
    };
  }

  onClick() {
    this.setState({ childVisible: !this.state.childVisible });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.onClick()} />
        {this.state.childVisible ? this.props.children : null}
      </div>
    );
  }
}

ShowHide.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ShowHide;
