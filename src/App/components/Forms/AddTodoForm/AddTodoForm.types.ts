import { ITodo } from 'App/App.types';

export interface IAddTodoFormProps {
  addTodo: (todo: ITodo) => void;
}
