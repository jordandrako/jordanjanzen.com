import React from 'react';
import { PropTypes } from 'prop-types';

const ActionsContext = React.createContext();

class ActionsProvider extends React.Component {
  state = {
    login: [],
    logout: [],
    addProject: [],
    addSkill: [],
    addTodo: [],
    updateProject: [],
    updateTodo: [],
    removeProject: [],
    removeSkill: [],
    removeTodo: []
  };
  render() {
    return <ActionsContext value={state}>{this.props.children}</ActionsContext>;
  }
}

ActionsProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export default ActionsProvider;
