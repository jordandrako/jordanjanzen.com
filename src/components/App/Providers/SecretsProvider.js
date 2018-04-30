import React from 'react';
import { PropTypes } from 'prop-types';

const SecretsContext = React.createContext();

class SecretsProvider extends React.Component {
  state = {};
  render() {
    return <SecretsContext value={state}>{this.props.children}</SecretsContext>;
  }
}

SecretsProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export default SecretsProvider;
