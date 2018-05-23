import * as React from 'react';
import { styled } from '../../styling';
import { ITodos, TAddTodo, TRemoveTodo, TUpdateTodo } from '../App.types';
import AddTodoForm from '../components/Forms/AddTodoForm/AddTodoForm';
import { Page } from '../components/Page';
import { Row } from '../components/Page/Grid';
import Todo from '../components/Todo/Todo';

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

interface ITodoListProps {
  addTodo: TAddTodo;
  removeTodo: TRemoveTodo;
  todos: ITodos;
  updateTodo: TUpdateTodo;
}

interface ITodoListState {
  showComplete: boolean;
}

class TodoList extends React.Component<ITodoListProps, ITodoListState> {
  constructor(props: ITodoListProps) {
    super(props);
    this._toggleShowComplete = this._toggleShowComplete.bind(this);
    this._renderTodo = this._renderTodo.bind(this);

    this.state = {
      showComplete: false,
    };
  }

  public render(): JSX.Element {
    const { addTodo, todos } = this.props;

    return (
      <Page title="Todo List">
        <Row>
          <AddTodoForm addTodo={addTodo} />
        </Row>

        <Row>
          <h2>My Todos</h2>
          <form>
            <ShowComplete
              type="checkbox"
              name="show-complete"
              checked={this.state.showComplete}
              onChange={this._toggleShowComplete}
            />
            <label htmlFor="show-complete" onClick={this._toggleShowComplete}>
              Show completed todos?
            </label>
          </form>
          <ListOfTodos>
            {todos && this._renderTodo(this.state.showComplete)}
          </ListOfTodos>
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

  private _toggleShowComplete() {
    this.setState({ showComplete: !this.state.showComplete });
  }

  private _renderTodo(
    showComplete: boolean
  ): JSX.Element | null | (JSX.Element | null)[] {
    const { removeTodo, todos, updateTodo } = this.props;
    return Object.keys(todos).map(key => {
      if (showComplete) {
        return (
          <Todo
            key={key}
            index={key}
            details={todos[key]!}
            updateTodo={updateTodo}
            removeTodo={removeTodo}
          />
        );
      }
      if (todos[key]! && !todos[key]!.complete) {
        return (
          <Todo
            key={key}
            index={key}
            details={todos[key]!}
            updateTodo={updateTodo}
            removeTodo={removeTodo}
          />
        );
      }
      return null;
    });
  }
}

export default TodoList;
