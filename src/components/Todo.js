import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextareaAutosize from 'react-autosize-textarea';

import Form from './Form';
import Button from './Button';

const Item = styled.li`list-style: none;`;

class Todo extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, key) {
    const updatedProp = {
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    };
    this.props.updateTodo(key, updatedProp);
  }

  render() {
    const { details, index } = this.props;
    return (
      <Item className="todo-item" key={index}>
        <Form>
          <input
            type="text"
            name="name"
            defaultValue={details.name}
            placeholder="Todo"
            onChange={e => this.handleChange(e, index)}
          />
          <span className="checkbox">
            <input
              type="checkbox"
              name="complete"
              defaultChecked={details.complete}
              defaultValue={details.complete}
              onChange={e => this.handleChange(e, index)}
            />
            <label htmlFor="complete">Complete</label>
          </span>
          <select
            type="text"
            name="cat"
            defaultValue={details.cat}
            onChange={e => this.handleChange(e, index)}
          >
            <option>Category</option>
            <option value="design">Design</option>
            <option value="component">Component</option>
            <option value="quality">Quality</option>
            <option value="backend">Backend</option>
          </select>
          <TextareaAutosize
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
          <Button onClick={() => this.props.removeTodo(index)} wide small type="warn">
            - Remove Todo
          </Button>
        </Form>
      </Item>
    );
  }
}

Todo.propTypes = {
  removeTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
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
