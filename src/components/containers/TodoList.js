import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AddTodoForm from '../AddTodoForm';
import Todo from '../Todo';

import { Page, Row } from '../../theme/grid';

const ListOfTodos = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const ShowComplete = styled.input`
  display: inline;
  margin: 0.5em;
`;

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.toggleShowComplete = this.toggleShowComplete.bind(this);
    this.renderTodo = this.renderTodo.bind(this);

    this.state = {
      showComplete: false,
    };
  }

  toggleShowComplete() {
    this.setState({ showComplete: !this.state.showComplete });
  }

  renderTodo(showComplete) {
    const {
      removeTodo,
      todos,
      updateTodo,
    } = this.props;
    return Object.keys(todos).map((key) => {
      if (showComplete) {
        return (
          <Todo
            key={key}
            index={key}
            details={todos[key]}
            updateTodo={updateTodo}
            removeTodo={removeTodo}
          />
        );
      } else if (!todos[key].complete) {
        return (
          <Todo
            key={key}
            index={key}
            details={todos[key]}
            updateTodo={updateTodo}
            removeTodo={removeTodo}
          />
        );
      }
      return null;
    });
  }

  render() {
    const {
      addTodo,
      todos,
    } = this.props;

    return (
      <Page title="Todo List">
        <Row>
          <AddTodoForm addTodo={addTodo} />
        </Row>

        <Row>
          <h2>My Todos</h2>
          <form>
            <ShowComplete
              ref={(input) => {
                this.todoForm = input;
              }}
              type="checkbox"
              name="show-complete"
              checked={this.state.showComplete}
              onChange={this.toggleShowComplete}
            />
            <label htmlFor="show-complete" onClick={this.toggleShowComplete}>
              Show completed todos?
            </label>
          </form>
          <ListOfTodos>{todos && this.renderTodo(this.state.showComplete)}</ListOfTodos>
        </Row>

        <Row>
          <h2>Inspiration</h2>
          <ul>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://sambedingfield.com/"
              >
                Sam Bedingfield
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://wesbos.com"
              >
                Wes Bos
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://ivesvh.com/"
              >
                Ives van Hoorne
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://line25.com/inspiration/designer-portfolio-websites"
              >
                Line 25 list of 30 portfolios
              </a>
            </li>
          </ul>
        </Row>
      </Page>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.object.isRequired,
  addTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default TodoList;
