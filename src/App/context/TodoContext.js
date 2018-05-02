import React from 'react';

export const TodoContext = React.createContext();

export function withTodos(Component) {
  return function ComponentWithTodos(props) {
    return (
      <TodoContext.Consumer>
        {(todos) => <Component {...props} todos={todos} />}
      </TodoContext.Consumer>
    );
  };
}
