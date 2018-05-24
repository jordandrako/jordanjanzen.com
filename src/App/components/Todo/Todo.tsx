import * as React from 'react';
import { truncate } from 'utilities';
import StyledForm from '../Forms/StyledForm';
import * as Styled from './Todo.styles';
import { ITodoProps } from './Todo.types';

export default class Todo extends React.Component<ITodoProps, {}> {
  private _index: string;
  public constructor(props: ITodoProps) {
    super(props);
    this._index = this.props.index;
  }

  public render(): JSX.Element | null {
    const { details } = this.props;
    if (!details) {
      return null;
    }
    const link = details.link ? (
      <p>
        <a target="_blank" rel="noopener noreferrer" href={details.link}>
          {truncate(decodeURI(details.link), 30)}
        </a>
      </p>
    ) : null;

    return (
      <Styled.Item
        className="todo-item"
        key={this._index}
        isComplete={details.complete}
      >
        <div className="flag">
          <button className="complete" onClick={this._toggleComplete}>
            <div className="checkbox" />
            <p className="label">COMPLETE</p>
          </button>
          <button className="remove" onClick={this._removeTodo}>
            <div />
          </button>
        </div>
        <StyledForm>
          <input
            type="text"
            name="name"
            defaultValue={details.name}
            placeholder="Todo"
            onChange={this._handleChange}
          />
          <select
            name="category"
            defaultValue={details.category}
            onChange={this._handleChange}
          >
            <option>Category</option>
            <option value="design">Design</option>
            <option value="content">Content</option>
            <option value="component">Component</option>
            <option value="quality">Quality</option>
            <option value="backend">Backend</option>
            <option value="other">Other</option>
          </select>
          <label htmlFor="priority">Priority</label>
          <select
            name="priority"
            defaultValue={details.priority || '2'}
            onChange={this._handleChange}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          <textarea
            name="desc"
            defaultValue={details.desc}
            placeholder="Description"
            onChange={this._handleChange}
            rows={3}
          />
          {link}
        </StyledForm>
      </Styled.Item>
    );
  }

  private _removeTodo = (ev: React.MouseEvent<HTMLButtonElement>): void => {
    this.props.removeTodo(this._index);
  };

  private _handleChange = (
    ev: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ): void => {
    const updatedProp = {
      [ev.target.name]:
        ev.target instanceof HTMLInputElement && ev.target.type === 'checkbox'
          ? ev.target.checked
          : ev.target.value,
    };
    this.props.updateTodo(this._index, updatedProp);
  };

  private _toggleComplete = (ev: React.MouseEvent<HTMLButtonElement>): void => {
    const updatedProp = {
      complete: !this.props.details.complete,
    };
    this.props.updateTodo(this._index, updatedProp);
  };
}
