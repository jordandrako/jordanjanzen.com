import React from 'react';
import { PropTypes } from 'prop-types';

const DataContext = React.createContext();

class DataProvider extends React.Component {
  state = {
    isLoggedIn: false,
    isMobile: false,
    projects: {},
    skills: {},
    todos: {}
  };
  render() {
    return <DataContext value={state}>{this.props.children}</DataContext>;
  }
}

DataProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export default DataProvider;
