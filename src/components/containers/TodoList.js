import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Page, Row } from '../Grid';
import AddTodoForm from '../AddTodoForm';
import Todo from '../Todo';

const ListOfTodos = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const TodoList = (props) => (
  <Page title="Todo">
    <Row>
      <AddTodoForm addTodo={props.addTodo} />
    </Row>

    <Row>
      <h3>Checklist</h3>
      <ListOfTodos className="todo-list">
        {Object.keys(props.todos).map((key) => (
          <Todo
            key={key}
            index={key}
            details={props.todos[key]}
            updateTodo={props.updateTodo}
            removeTodo={props.removeTodo}
          />
        ))}
      </ListOfTodos>
    </Row>

    <Row>
      <h3>Inspiration</h3>
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
          <a target="_blank" rel="noopener noreferrer" href="http://wesbos.com">
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

TodoList.propTypes = {
  todos: PropTypes.object.isRequired,
  addTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default TodoList;
