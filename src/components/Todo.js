import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import { colors } from '../theme/variables';

class Todo extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, key) {
    const todo = this.props.todos[key];
    // take a copy of that fish and update it with the new data
    const updatedTodo = {
      ...todo,
      [e.target.name]: e.target.value,
    };
    this.props.updateTodo(key, updatedTodo);
  }
  handleCheckbox(e, key) {
    const todo = this.props.todos[key];
    // take a copy of that fish and update it with the new data
    const updatedTodo = {
      ...todo,
      [e.target.name]: e.target.checked,
    };
    this.props.updateTodo(key, updatedTodo);
  }

  render() {
    const { details, index } = this.props;
    const isComplete = details.complete === 'true';
    return (
      <li className="todo-item" key={index}>
        <input
          type="text"
          name="name"
          defaultValue={details.name}
          placeholder="Todo"
          onChange={e => this.handleChange(e, index)}
        />
        <input
          type="checkbox"
          name="complete"
          defaultChecked={details.complete}
          defaultValue={details.complete}
          onChange={e => this.handleCheckbox(e, index)}
        />
        Complete
        <select
          type="text"
          name="cat"
          defaultValue={details.cat}
          onChange={e => this.handleChange(e, index)}
        >
          <option value="design">Design</option>
          <option value="component">Component</option>
          <option value="quality">Quality</option>
          <option value="backend">Backend</option>
        </select>
        <textarea
          type="text"
          name="desc"
          defaultValue={details.desc}
          placeholder="Description"
          onChange={e => this.handleChange(e, index)}
        />
        <p>
          <a target="_blank" rel="noopener noreferrer" href={details.link}>
            {details.link}
          </a>
        </p>
        <Button onClick={() => this.props.removeTodo(index)} small type="remove">
          Remove Todo
        </Button>
      </li>
    );
  }
}

Todo.propTypes = {
  removeTodo: PropTypes.func.isRequired,
  details: PropTypes.shape({
    name: 'string',
    cat: 'string',
    desc: 'string',
    link: 'string',
    status: 'string',
  }).isRequired,
  index: PropTypes.string.isRequired,
};

export default Todo;
