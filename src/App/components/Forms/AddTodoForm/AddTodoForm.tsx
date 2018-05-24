import * as React from 'react';
import { semanticColors } from 'styling';
import Button, { ButtonType } from '../../Button';
import StyledForm from '../StyledForm';
import { IAddTodoFormProps } from './AddTodoForm.types';

export default class AddTodoForm extends React.Component<
  IAddTodoFormProps,
  {}
> {
  private _form: React.RefObject<HTMLFormElement>;
  private _name: React.RefObject<HTMLInputElement>;
  private _category: React.RefObject<HTMLSelectElement>;
  private _priority: React.RefObject<HTMLSelectElement>;
  private _desc: React.RefObject<HTMLTextAreaElement>;
  private _link: React.RefObject<HTMLInputElement>;

  public constructor(props: IAddTodoFormProps) {
    super(props);

    this._form = React.createRef();
    this._name = React.createRef();
    this._category = React.createRef();
    this._priority = React.createRef();
    this._desc = React.createRef();
    this._link = React.createRef();
  }

  public render(): JSX.Element {
    return (
      <div>
        <h3>Add a new todo item</h3>
        <StyledForm>
          <form
            ref={this._form}
            className="add-todo"
            onSubmit={this._createTodo}
          >
            <input
              ref={this._name}
              type="text"
              name="name"
              placeholder="Todo"
              required={true}
            />
            <select
              ref={this._category}
              name="category"
              placeholder="Todo Category"
              required={true}
            >
              <option value="">Select Category</option>
              <option value="design">Design</option>
              <option value="content">Content</option>
              <option value="component">Component</option>
              <option value="quality">Quality</option>
              <option value="backend">Backend</option>
              <option value="other">Other</option>
            </select>
            <select ref={this._priority} name="priority">
              <option value="2">Priority 2</option>
              <option value="1">Priority 1</option>
              <option value="0">Priority 0</option>
            </select>
            <textarea
              ref={this._desc}
              name="desc"
              placeholder="Todo Description"
            />
            <input
              ref={this._link}
              type="text"
              name="link"
              placeholder="Todo link"
            />
            <Button
              type="submit"
              buttonType={ButtonType.Submit}
              arrows={semanticColors.siteBackground}
            >
              + Add Todo
            </Button>
          </form>
        </StyledForm>
      </div>
    );
  }

  private _createTodo = (ev: React.FormEvent<HTMLFormElement>): void => {
    ev.preventDefault();
    const todo = {
      category: this._category.current!.value,
      complete: false,
      desc: this._desc.current!.value,
      link: encodeURI(this._link.current!.value),
      name: this._name.current!.value,
      priority: this._priority.current!.value,
    };
    this.props.addTodo(todo);
    this._form.current!.reset();
  };
}
