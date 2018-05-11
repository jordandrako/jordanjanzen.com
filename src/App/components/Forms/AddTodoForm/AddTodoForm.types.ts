import { ITodoObject } from '../../../App.types';

export interface IAddTodoFormProps {
  addTodo: (todo: ITodoObject) => void;
}
