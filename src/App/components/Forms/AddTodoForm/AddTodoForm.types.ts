import { ITodo } from '../../../App.types';

export interface IAddTodoFormProps {
  addTodo: (todo: ITodo) => void;
}
