import React from 'react';
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';
import styled from 'styled-components';

import Main from '../Main';
import PageTitle from '../PageTitle';
import AddTodoForm from '../AddTodoForm';
import Todo from '../Todo';

const ListOfTodos = styled.ul`
  padding: 0;
  max-width: 480px;
`;

const TodoList = props => (
  <DocumentTitle title="Jordan Janzen | todo">
    <Main>
      <PageTitle title="Todo" />
      <AddTodoForm addTodo={props.addTodo} />
      <h3>Checklist</h3>
      <ListOfTodos className="todo-list">
        {Object.keys(props.todos).map(key => (
          <Todo
            key={key}
            index={key}
            todos={props.todos}
            details={props.todos[key]}
            updateTodo={props.updateTodo}
            removeTodo={props.removeTodo}
          />
        ))}
      </ListOfTodos>
      <button onClick={props.loadSamples}>Load Example Todos</button>
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
    </Main>
  </DocumentTitle>
);

TodoList.propTypes = {
  todos: PropTypes.shape({
    key: {
      name: 'string',
      cat: 'string',
      desc: 'string',
      link: 'string',
      status: 'string',
    },
  }).isRequired,
  addTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  loadSamples: PropTypes.func.isRequired,
};

export default TodoList;
