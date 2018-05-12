import { TTodo } from '../../App.types';

export interface ITodoProps {
  details: TTodo;
  index: string;
  removeTodo: (key: string) => void;
  updateTodo: (key: string, updatedProp: {}) => void;
}

export interface ITodoStyleProps {
  isComplete: boolean;
}
