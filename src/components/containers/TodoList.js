import React from 'react';
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';
import styled from 'styled-components';

import { MainColumn, Main, Row } from '../Grid';
import PageTitle from '../PageTitle';
import AddTodoForm from '../AddTodoForm';
import Todo from '../Todo';

const ListOfTodos = styled.ul`
  padding: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  li {
    max-width: 50%;
  }
`;

const TodoList = props => (
  <DocumentTitle title="Jordan Janzen | todo">
    <MainColumn>
      <PageTitle title="Todo" />
      <Main>
        <Row>
          <AddTodoForm addTodo={props.addTodo} />
        </Row>
        <Row>
          <h3>Checklist</h3>
          <ListOfTodos className="todo-list">
            {Object.keys(props.todos).map(key => (
              <Todo
                key={key}
                index={key}
                details={props.todos[key]}
                updateTodo={props.updateTodo}
                removeTodo={props.removeTodo}
              />
            ))}
          </ListOfTodos>

          <button onClick={props.loadSamples}>Load Example Todos</button>
        </Row>
        <Row>
          <h3>Inspiration</h3>
          <ul>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="http://sambedingfield.com/">
                Sam Bedingfield
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="http://wesbos.com">
                Wes Bos
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="http://ivesvh.com/">
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
      </Main>
    </MainColumn>
  </DocumentTitle>
);

TodoList.propTypes = {
  todos: PropTypes.object.isRequired,
  addTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  loadSamples: PropTypes.func.isRequired,
};

export default TodoList;
