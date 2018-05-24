import { ITodo } from 'App/App.types';

export interface ITodoProps {
  details: ITodo;
  index: string;
  removeTodo: (key: string) => void;
  updateTodo: (key: string, updatedProp: {}) => void;
}

export interface ITodoStyleProps {
  isComplete: boolean;
}
