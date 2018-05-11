import { IObject, ITodoObject } from '../../App.types';

export interface ITodo {}

export interface ITodoProps {
  details: ITodoObject;
  index: string;
  removeTodo: (key: string) => void;
  updateTodo: (key: string, updatedProp: IObject) => void;
}

export interface ITodoStyleProps {
  isComplete: boolean;
}
