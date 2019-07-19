import { ITodo, TRemoveTodo, TUpdateTodo } from 'App/App.types';

export interface ITodoProps {
  details: ITodo;
  index: string;
  removeTodo: TRemoveTodo;
  updateTodo: TUpdateTodo;
}

export interface ITodoStyleProps {
  isComplete: boolean;
}
