import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './Button';
import { colors, typography } from '../theme/variables';
import { toTitleCase } from '../helpers';

const Alert = styled.div`
  background: ${(props) => {
    const type = props.type;
    if (type === 'alert') {
      return colors.yellow;
    } else if (type === 'success') {
      return colors.yellow;
    } else if (type === 'error') {
      return colors.yellow;
    }
    return colors.lightblack;
  }};
  padding: 2em;
  margin: 1.5em;
  border-radius: 0.25em;
  border: inset solid 3px rgba(255, 255, 255, 0.5);
  font-family: ${typography.monospace};
  position: relative;

  .showHide {
    position: absolute;
    top: 0.5em;
    right: 0.5em;
    width: 2em;
    height: 2em;
  }

  h4 {
    margin-top: 0;
  }
`;

class Banner extends Component {
  // constructor() {
  //   super();
  //   this.doAction = this.doAction.bind(this);

  //   this.state = {
  //     action: this.props.action,
  //   };
  // }

  doAction() {
    const action = this.props.action;
    if (action === 'reload' || 'retry') {
      this.setState.action = 'Reloading...';
      return this.forceUpdate();
    }
    this.setState.action = 'Unknown action';
    return null;
  }

  render() {
    const actionButton = this.props.action ? (
      <Button className="action" onClick={this.doAction} text={toTitleCase(this.state.action)} />
    ) : null;

    return (
      <Alert type={this.props.type}>
        <h4 className="alert">{this.props.children}</h4>
        {actionButton}
      </Alert>
    );
  }
}

Banner.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  action: PropTypes.string,
};

Banner.defaultProps = {
  type: 'info',
  action: null,
};

export default Banner;
